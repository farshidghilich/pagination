import React from "react";
import { BaseComponent } from "./BaseComponent";
import axios from "axios";
import {
  Row,
  Col,
  Form,
  ButtonGroup,
  Button,
  Card,
  Accordion,
} from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as solid from "@fortawesome/free-solid-svg-icons";
import { getUrl, getToken } from "./utility";
import Pagination from "./Pagination";
import "../asset/style/pages.css";
export class BaseManageComponent extends BaseComponent {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
    this.state = {
      currentPage: 1,
      list: [],
      item: {},
      search: {},
      alert: {},
      validated: false,
      pickers: {},
      page: {},
      response: [],
      pageNumbers: [],
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchDateChange = this.handleSearchDateChange.bind(this);
  }

  componentDidMount() {
    this.resetForm();
    this.getResults(1);
  }
  getResults = (pageNo) => {
    var filter = this.props.location.search;
    axios
      .get(getUrl(this.apiName, "List") + filter + `?_pageNumber=${pageNo}`)
      .then((response) => {
        this.setState({ list: response.data.result.data });
        console.log(this.state.list);
        console.log(response.data);
      });
  };
  //fetch a data
  //or update a query to get data

  getSearch() {
    var result = "";
    Object.keys(this.state.search).map((key) => {
      if (this.state.search[key] !== undefined && this.state.search[key] !== "")
        result += key + "=" + this.state.search[key] + "&";
    });
    return result;
  }

  clearSearch() {
    this.setState({ search: {} }, this.showList);
  }

  showList() {
    var predicate = this.getSearch();
    var filter = this.props.location.search;
    if (filter === undefined || filter === null || filter.length <= 0)
      filter = "?" + predicate;
    else filter += "&" + predicate;
    axios
      .get(
        getUrl(this.apiName, "List") +
          filter +
          `?_pageNumber=${this.state.currentPage}&pageSize=5`
      )
      .then((response) => {
        this.setState({ list: response.data.result.data });
        console.log(this.state.list);
        console.log(response.data);
        if (response.data.statusCode == 401)
          this.props.history.push("/Authenticate");
        if (response.data.type === 2)
          this.showExecutionResult(response.data.result.data);
        else {
          this.setState({ list: response.data.result.data });
        }
      })
      .catch((error) => {
        this.showMessage(2, "اشکال در فراخوانی سرور", error);
      });
  }

  showDetail(id) {
    axios
      .get(getUrl(this.apiName, "Detail", id))
      .then((response) => {
        if (response.data.statusCode == 401)
          this.props.history.push("/Authenticate");
        if (response.data.type === 2) this.showExecutionResult(response.data);
        else {
          this.setState({ item: response.data.result });
          this.setState({ validated: false });
        }
      })
      .catch((error) => {
        this.showMessage(2, "اشکال در فراخوانی سرور", error);
      });
  }

  insertItem() {
    if (!this.formIsValid()) return;
    axios
      .post(getUrl(this.apiName, "Insert"), this.state.item)
      .then((response) => {
        this.showExecutionResult(response.data);
        if (response.data.type !== 2) this.resetForm();
      })
      .catch((error) => {
        this.showMessage(2, "اشکال در فراخوانی سرور", error);
      });
  }

  updateItem() {
    if (!this.formIsValid()) return;
    axios
      .put(getUrl(this.apiName, "Update"), this.state.item)
      .then((response) => {
        this.showExecutionResult(response.data);
        if (response.data.type !== 2) this.resetForm();
      })
      .catch((error) => {
        this.showMessage(2, "اشکال در فراخوانی سرور", error);
      });
  }

  formIsValid() {
    var form = this.formRef.current;
    if (form.checkValidity() === false) {
      this.setState({ validated: true });
      return false;
    }
    return true;
  }

  deleteItem(id) {
    if (!window.confirm("آیا از حذف اطلاعات اطمینان دارید؟")) return;
    axios
      .delete(getUrl(this.apiName, "Delete", id ? id : this.state.item.id))
      .then((response) => {
        this.showExecutionResult(response.data);
        if (response.data.type !== "2") this.resetForm();
      })
      .catch((error) => {
        this.showMessage(2, "اشکال در فراخوانی سرور", error);
      });
  }

  resetForm() {
    this.showList();
    this.showDetail(0);
  }
  handelPagination(event) {
    this.setState({ page: event.target.innerText });
  }
  handleSearchChange(event) {
    const { name, value } = event.target;
    this.setState({ search: { ...this.state.search, [name]: value } });
  }
  handleSearchDateChange(value, name) {
    this.setState({
      search: {
        ...this.state.search,
        [name]: value === "" ? "" : value.toDate().toISOString(),
      },
    });
  }

  selectRow = {
    mode: "radio",
    clickToSelect: true,
    hideSelectColumn: true,
    classes: "selected-row",
    onSelect: (row, isSelect, rowIndex, e) => {
      this.showDetail(row.id);
    },
  };

  render() {
    return (
      <>
        {this.renderAlarm()}
        <Row className="mt-3">
          <Col md={12} lg={6} className="manage-list">
            <Card bg="light">
              <Card.Body>
                <Card.Title>لیست {this.entityName}</Card.Title>
                <Accordion className="mb-3" bg="light">
                  <Accordion.Item eventKey="0" flush>
                    <Accordion.Header>
                      جستجوی {this.entityName}
                    </Accordion.Header>
                    <Accordion.Body>
                      {this.renderSearch()}
                      <ButtonGroup
                        aria-label="Search Buttons"
                        className="text-center mb-3"
                      >
                        <Button
                          variant="outline-primary"
                          type="button"
                          onClick={() => this.showList()}
                        >
                          <FontAwesomeIcon icon={solid.faSearch} /> جستجو
                        </Button>
                        <Button
                          variant="outline-secondary"
                          type="button"
                          onClick={() => this.clearSearch()}
                        >
                          <FontAwesomeIcon icon={solid.faEye} /> نمایش همه
                        </Button>
                      </ButtonGroup>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <BootstrapTable
                  classes="grid"
                  className="mt-3"
                  keyField="id"
                  data={this.state.list}
                  columns={this.columns}
                  selectRow={this.selectRow}
                  // pagination={paginationFactory()}
                />
                <Pagination
                  currentPage={this.state.currentPage}
                  totalPages={10}
                  changeCurrentPage={this.getResults}
                  theme="default"
                />
              </Card.Body>
            </Card>
          </Col>
          <Col md={12} lg={6} className="manage-detail">
            <Card bg="light">
              <Card.Body>
                <Card.Title>جزئیات {this.entityName}</Card.Title>
                <Form
                  ref={this.formRef}
                  noValidate
                  validated={this.state.validated}
                >
                  {this.renderForm()}
                  <ButtonGroup
                    aria-label="Manage Buttons"
                    className="float-left"
                  >
                    {this.state.item.id > 0 ? (
                      <>
                        <Button
                          variant="outline-primary"
                          type="button"
                          onClick={() => this.updateItem()}
                        >
                          <FontAwesomeIcon icon={solid.faEdit} /> ذخیره
                        </Button>
                        <Button
                          variant="outline-danger"
                          type="button"
                          onClick={() => this.deleteItem()}
                        >
                          <FontAwesomeIcon icon={solid.faTrash} /> حذف
                        </Button>
                      </>
                    ) : (
                      <Button
                        variant="outline-primary"
                        type="button"
                        onClick={() => this.insertItem()}
                      >
                        <FontAwesomeIcon icon={solid.faPlus} /> ایجاد
                      </Button>
                    )}
                    <Button
                      variant="outline-secondary"
                      type="button"
                      onClick={() => this.showDetail(0)}
                    >
                      <FontAwesomeIcon icon={solid.faUndo} /> انصراف
                    </Button>
                  </ButtonGroup>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
    );
  }
}

import React, { useState } from "react";
// import "../css/style.css";
function Product() {
  return (
    <>
      <section id="container">
        <section id="main-content">
          <section className="wrapper">
            <div className="col-lg-12 mt">
              <div className="row content-panel">
                <div className="col-lg-10 col-lg-offset-1">
                  <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <form
                      action="/panel/invoices/add"
                      role="form"
                      id="addInvoice"
                      method="post"
                      acceptCharset="utf-8"
                    >
                      <div style={{ display: "none" }}>
                        <input
                          type="hidden"
                          name="_method"
                          defaultValue="POST"
                        />
                      </div>
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 pull-right">
                          <div
                            className="form-group required"
                            id="select-invoice-customer"
                          >
                            <label className="control-label">مشتری</label>
                            <div className="input-group" dir="rtl">
                              <span className="input-group-btn">
                                <a
                                  className="btn btn-default"
                                  type="button"
                                  data-toggle="modal"
                                  id="cmodal"
                                  data-target="#customerModal"
                                >
                                  <i className="fa fa-user-plus" />
                                </a>
                              </span>
                              <select
                                name="data[Invoice][customer_id]"
                                className="form-control"
                                placeholder="جستجو و انتخاب مشتری"
                                required="required"
                                id="InvoiceCustomerId"
                              >
                                <option value />
                              </select>{" "}
                            </div>
                          </div>
                          <div className="form-group required">
                            <label className="control-label">
                              شماره فاکتور
                            </label>
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button
                                  className="btn btn-default invoicenum"
                                  type="button"
                                >
                                  <i className="glyphicon glyphicon-shopping-cart" />
                                </button>
                              </span>
                              <input
                                name="data[Invoice][number]"
                                className="form-control"
                                defaultValue={41257}
                                data-num={41257}
                                maxLength={20}
                                type="text"
                                id="InvoiceNumber"
                                required="required"
                              />{" "}
                            </div>
                          </div>
                          <div className="form-group required">
                            <label className="control-label">تاریخ</label>
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button
                                  className="btn btn-default datepickerbtn"
                                  type="button"
                                >
                                  <i className="glyphicon glyphicon-calendar" />
                                </button>
                              </span>
                              <input
                                name="data[Invoice][datefa]"
                                defaultValue="۱۴۰۱/۰۴/۰۲"
                                className="form-control datepickerfa"
                                type="text"
                                id="InvoiceDatefa"
                              />
                              <input
                                type="hidden"
                                name="data[Invoice][date]"
                                defaultValue="2022-06-23"
                                className="datepickeren"
                                id="InvoiceDate"
                              />{" "}
                            </div>
                          </div>
                          <div className="form-group required">
                            <label className="control-label">
                              تاریخ سررسید
                            </label>
                            <div className="input-group">
                              <span className="input-group-btn">
                                <button
                                  className="btn btn-default datepickerbtn"
                                  type="button"
                                >
                                  <i className="glyphicon glyphicon-calendar" />
                                </button>
                              </span>
                              <input
                                name="data[Invoice][duefa]"
                                defaultValue="۱۴۰۲/۰۴/۰۲"
                                className="form-control datepickerfa"
                                type="text"
                                id="InvoiceDuefa"
                              />
                              <input
                                type="hidden"
                                name="data[Invoice][due]"
                                defaultValue="2022-07-03"
                                className="datepickeren"
                                id="InvoiceDue"
                              />{" "}
                            </div>
                          </div>
                        </div>
                        <div
                          className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-md-offset-2 pull-left"
                          id="customer-detail"
                        ></div>
                      </div>
                      <input
                        type="hidden"
                        name="data[Invoice][token]"
                        defaultValue="8527ba7918d913118208e3da3c51d886"
                        id="InvoiceToken"
                      />
                      <div className="row">
                        <div className="col-xs-12 col-sm-6 col-md-12 col-lg-12">
                          <div className="form-group required">
                            <label className="control-label">عنوان</label>
                            <input
                              name="data[Invoice][title]"
                              className="form-control"
                              maxLength={100}
                              type="text"
                              id="InvoiceTitle"
                              required="required"
                            />{" "}
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                          <table className="table table-bordered" id="items">
                            <thead>
                              <tr>
                                <th>شرح کالا</th>
                                <th>تعداد</th>
                                <th>قیمت یک واحد</th>
                                <th id="th-discount">
                                  تخفیف <span className="th-unit">%</span>
                                  <div className="dropdown pull-left">
                                    <span
                                      className="caret"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="true"
                                      onclick="ga('send', 'event', 'Button', 'click', 'discount dropdown');"
                                    />
                                    <ul
                                      className="dropdown-menu"
                                      aria-labelledby="dropdownDiscount"
                                    >
                                      <li className="dropdown-header">
                                        ستون تخفیف
                                      </li>
                                      <li
                                        role="separator"
                                        className="divider"
                                      />
                                      <li>
                                        <a
                                          href="#"
                                          className="thead-dropdown"
                                          data-column="discount"
                                          data-type="percentage"
                                          data-unit="%"
                                          id="discount-percentage"
                                          onclick="ga('send', 'event', 'Button', 'click', 'discount percentage');"
                                        >
                                          درصد
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="thead-dropdown"
                                          data-column="discount"
                                          data-type="irr"
                                          data-unit="(﷼)"
                                          id="discount-irr"
                                          onclick="ga('send', 'event', 'Button', 'click', 'discount irr');"
                                        >
                                          ریال
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="thead-dropdown"
                                          data-column="discount"
                                          data-type="disable"
                                          id="discount-disable"
                                          onclick="ga('send', 'event', 'Button', 'click', 'discount hide');"
                                        >
                                          حذف ستون
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </th>
                                <th id="th-tax">
                                  مالیات <span className="th-unit">%</span>
                                  <div className="dropdown pull-left">
                                    <span
                                      className="caret"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="true"
                                      onclick="ga('send', 'event', 'Button', 'click', 'tax dropdown');"
                                    />
                                    <ul
                                      className="dropdown-menu"
                                      aria-labelledby="dropdownTax"
                                    >
                                      <li className="dropdown-header">
                                        ستون مالیات
                                      </li>
                                      <li
                                        role="separator"
                                        className="divider"
                                      />
                                      <li>
                                        <a
                                          href="#"
                                          className="thead-dropdown"
                                          data-column="tax"
                                          data-type="percentage"
                                          data-unit="%"
                                          id="tax-percentage"
                                          onclick="ga('send', 'event', 'Button', 'click', 'tax percentage');"
                                        >
                                          درصد
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="thead-dropdown"
                                          data-column="tax"
                                          data-type="irr"
                                          data-unit="(﷼)"
                                          id="tax-irr"
                                          onclick="ga('send', 'event', 'Button', 'click', 'tax irr');"
                                        >
                                          ریال
                                        </a>
                                      </li>
                                      <li>
                                        <a
                                          href="#"
                                          className="thead-dropdown"
                                          data-column="tax"
                                          data-type="disable"
                                          id="tax-disable"
                                          onclick="ga('send', 'event', 'Button', 'click', 'tax hide');"
                                        >
                                          حذف ستون
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </th>
                                <th>مبلغ کل</th>
                              </tr>
                              <input
                                type="hidden"
                                name="data[Invoice][discountcolumn]"
                                id="discount-column"
                              />
                              <input
                                type="hidden"
                                name="data[Invoice][taxcolumn]"
                                id="tax-column"
                              />{" "}
                            </thead>
                            <tbody>
                              <tr className="the-item">
                                <td className="input-td desc-td" width="35%">
                                  <span
                                    className="removeitem fa fa-times"
                                    title="حذف"
                                  />
                                  <span
                                    className="dragHandle fa fa-bars"
                                    title="جابجایی"
                                  />
                                  <input
                                    type="hidden"
                                    name="data[Item][0][id]"
                                    className="table-input item-id"
                                    id="Item0Id"
                                  />
                                  <input
                                    type="hidden"
                                    name="data[Item][0][unit]"
                                    className="table-input item-unit"
                                    id="Item0Unit"
                                  />
                                  <input
                                    name="data[Item][0][description]"
                                    className="table-input item-desc resize-input"
                                    required="required"
                                    maxLength={255}
                                    type="text"
                                    id="Item0Description"
                                  />{" "}
                                </td>
                                <td className="input-td">
                                  <input
                                    name="data[Item][0][quantity]"
                                    className="floatnum table-input item-quantity"
                                    defaultValue={1}
                                    required="required"
                                    pattern="[0-9]+([\.,][0-9]+)?"
                                    type="text"
                                    id="Item0Quantity"
                                  />
                                </td>
                                <td className="input-td">
                                  <input
                                    name="data[Item][0][cost]"
                                    className="pricenum table-input item-cost"
                                    required="required"
                                    min={1}
                                    type="number"
                                    id="Item0Cost"
                                  />
                                </td>
                                <td className="input-td">
                                  <input
                                    name="data[Item][0][discount]"
                                    className="pricenum table-input item-discount"
                                    defaultValue={0}
                                    pattern="\d{1,2}"
                                    maxLength={2}
                                    type="number"
                                    id="Item0Discount"
                                  />
                                </td>
                                <td className="input-td">
                                  <input
                                    name="data[Item][0][tax]"
                                    className="pricenum table-input item-tax"
                                    defaultValue={0}
                                    pattern="\d{1,2}"
                                    maxLength={2}
                                    type="number"
                                    id="Item0Tax"
                                  />
                                </td>
                                <td className="input-td">
                                  <input
                                    name="data[Item][0][total]"
                                    className="pricenum table-input item-total"
                                    disabled="disabled"
                                    defaultValue={0}
                                    type="text"
                                    id="Item0Total"
                                  />
                                </td>
                              </tr>
                              <tr className="nodrag nodrop">
                                <td
                                  className="table-foots"
                                  colSpan={4}
                                  rowSpan={0}
                                >
                                  <span
                                    className="newitem fa fa-plus"
                                    title="سطر جدید"
                                  />
                                </td>
                                <th>جمع کل</th>
                                <td className="input-td">
                                  <input
                                    name="data[Invoice][totals_net]"
                                    className="pricenum table-input item-totals_net"
                                    disabled="disabled"
                                    type="text"
                                    id="InvoiceTotalsNet"
                                  />{" "}
                                </td>
                              </tr>
                              <tr
                                className="nodrag nodrop"
                                id="total-item-discount"
                              >
                                <th>تخفیف</th>
                                <td className="input-td">
                                  <input
                                    name="data[Invoice][discounts]"
                                    className="pricenum table-input item-discounts"
                                    disabled="disabled"
                                    type="text"
                                    id="InvoiceDiscounts"
                                  />{" "}
                                </td>
                              </tr>
                              <tr className="nodrag nodrop" id="total-item-tax">
                                <th>مالیات</th>
                                <td className="input-td">
                                  <input
                                    name="data[Invoice][taxs]"
                                    className="pricenum table-input item-taxs"
                                    disabled="disabled"
                                    type="text"
                                    id="InvoiceTaxs"
                                  />{" "}
                                </td>
                              </tr>
                              <tr
                                className="nodrag nodrop new-total-row hide"
                                id={0}
                              >
                                <td className="input-td">
                                  <span
                                    className="removetotalrow fa fa-times"
                                    title="حذف"
                                  />
                                  <input
                                    name="data[Totalrow][0][row_title]"
                                    className="table-input new-total-row-title"
                                    type="text"
                                    id="Totalrow0RowTitle"
                                  />
                                </td>
                                <td className="input-td">
                                  <input
                                    name="data[Totalrow][0][row_amount]"
                                    className="npnum table-input l2r new-total-row-amount"
                                    type="text"
                                    id="Totalrow0RowAmount"
                                  />{" "}
                                </td>
                              </tr>
                              <tr className="nodrag nodrop">
                                <th>قابل پرداخت</th>
                                <td className="input-td">
                                  <input
                                    name="data[Invoice][total]"
                                    className="pricenum table-input item-totals"
                                    disabled="disabled"
                                    type="text"
                                    id="InvoiceTotal"
                                  />{" "}
                                </td>
                              </tr>
                              <tr className="nodrag nodrop">
                                <td className="table-foots" colSpan={2}>
                                  <span
                                    className="newtotalrow fa fa-plus"
                                    title="سطر جدید"
                                    onclick="ga('send', 'event', 'Button', 'click', 'add total row');"
                                  />
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/*/col-lg-10 */}
            {/*/content-panel */}
            {/*/col-lg-12 mt */}
          </section>
          {/* /wrapper */}
        </section>
        {/* /main-content */}
      </section>
    </>
  );
}

export default Product;

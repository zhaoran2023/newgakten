"use client";
import { Badge, Button, Form, InputGroup, Modal } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Toppro from "@/app/pages/topProfile";
import MyBreadcrum from "@/app/pages/breadrumb";

export default function ChangePage() {
  const breadItems = [
    { title: "組織管理", link: "/admin/depart" },
    { title: "組織編集", link: "/admin/depart/change" },
  ];
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleClearClick = () => {
    setInputValue("");
  };

  const [organizationCode, setOrganizationCode] = useState("");
  const [organizationName, setOrganizationName] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    // 在这里获取并设置 organizationCode 和 organizationName 的值
    setOrganizationCode("PKaihatsu"); // 从数据源获取
    setOrganizationName("ナビゲーションセールス諜"); // 从数据源获取
    setShow(true);
  };
  const handleModalConfirm = () => {
    // 在这里执行确认操作
    handleClose();
  };

  return (
    <>
      <div id="new">
        <div id="daohang">
          <Toppro>
            <MyBreadcrum param={breadItems} key="departHomePageBread" />
          </Toppro>
        </div>
        <div id="top" style={{ marginTop: 30, marginLeft: 30 }}>
          <span style={{ fontSize: 20 }}>
            <strong>組織編集</strong>
          </span>
        </div>
        {/*--中间白色背景--*/}
        <div
          style={{
            background: "#FFFFFF",
            boxSizing: "border-box",
            padding: 10,
            borderRadius: 10,
            marginTop: 20,
            marginLeft: 20,
            marginRight: 20,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span style={{ fontSize: 15, marginLeft: 30, marginTop: 20 }}>
            親組織名
          </span>
          <InputGroup className="mb-3">
            <Form className="d-flex">
              <Form.Control
                placeholder="组織を選択してください"
                aria-label="组織を選択してください"
                aria-describedby="basic-addon2"
                type="search"
                style={{
                  fontSize: 13,
                  border: "1px solid #B0AFAE",
                  width: 350,
                  height: "40px",
                  borderRadius: "5px 0 0 5px",
                  marginLeft: 25,
                }}
                value={inputValue}
                onChange={handleInputChange}
              />
              <Button
                variant="primary"
                id="button-addon2"
                style={{
                  fontSize: 15,
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  borderRadius: "0 5px 5px 0",
                }}
              >
                選択
              </Button>
            </Form>
          </InputGroup>
          <div>
            <Button
              variant="outline-dark"
              style={{ width: 75, marginLeft: 25, fontSize: 13 }}
              onClick={handleClearClick}
            >
              クリア
            </Button>
            <div style={{ marginTop: 20 }}>
              <span style={{ fontSize: 15, marginLeft: 30 }}>
                組織コード
                <Badge
                  pill
                  bg="danger"
                  style={{ marginLeft: 5, marginBottom: 10 }}
                >
                  必须
                </Badge>
              </span>
              <span>
                <InputGroup className="mb-3">
                  <Form className="d-flex">
                    <Form.Control
                      placeholder="PKaihatsu"
                      aria-label="PKaihatsu"
                      aria-describedby="basic-addon2"
                      type="search"
                      style={{
                        fontSize: 13,
                        border: "1px solid #B0AFAE",
                        width: 400,
                        height: "40px",
                        borderRadius: "5px",
                        marginLeft: 25,
                      }}
                    />
                  </Form>
                </InputGroup>
              </span>
            </div>
            <div style={{ marginTop: 20 }}>
              <span style={{ fontSize: 15, marginLeft: 30 }}>
                組織名
                <Badge
                  pill
                  bg="danger"
                  style={{ marginLeft: 5, marginBottom: 10 }}
                >
                  必须
                </Badge>
              </span>
              <span>
                <InputGroup className="mb-3">
                  <Form className="d-flex">
                    <Form.Control
                      placeholder="ナビゲーションセールス諜"
                      aria-label="ナビゲーションセールス諜"
                      aria-describedby="basic-addon2"
                      type="search"
                      style={{
                        fontSize: 13,
                        border: "1px solid #B0AFAE",
                        width: 400,
                        height: "40px",
                        borderRadius: "5px",
                        marginLeft: 25,
                      }}
                    />
                  </Form>
                </InputGroup>
              </span>
            </div>
            <Button variant="primary" style={{ fontSize: 15, marginLeft: 25 }}>
              変更する
            </Button>{" "}
            <Button variant="danger" onClick={handleShow}>
              削除する
            </Button>{" "}
            <Modal
              aria-labelledby="contained-modal-title-vcenter"
              centered
              show={show}
              onHide={handleClose}
            >
              <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                  組織情報
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <p>親組織名: {inputValue}</p>
                <p>組織コード: {organizationCode}</p>
                <p>組織名: {organizationName}</p>
              </Modal.Body>
              <Modal.Footer
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <Button
                  variant="secondary"
                  onClick={handleClose}
                  style={{ backgroundColor: "white", color: "black" }}
                >
                  キャンセル
                </Button>
                <Button variant="primary" onClick={handleModalConfirm}>
                  確定
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

"use client";
import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  ButtonToolbar,
  Form,
  InputGroup,
} from "react-bootstrap";
import {
  AiFillPlusSquare,
  AiOutlineCaretDown,
  AiOutlineSearch,
} from "react-icons/ai";
import { CiInboxIn } from "react-icons/ci";
import "bootstrap/dist/css/bootstrap.min.css";
import Modal from "react-bootstrap/Modal";
import { App } from "@/app/admin/depart/table";
import Toppro from "@/app/pages/topProfile";
import MyBreadcrum from "@/app/pages/breadrumb";
import { useRouter } from "next/navigation";

export default function Page() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const breadItems = [
    { title: "管理", link: "/admin" },
    { title: "組織管理", link: "/admin/depart" },
  ];
  const router = useRouter();
  const gotMyPage = () => {
    router.push("/admin/depart/create");
  };
  const gotpage = () => {
    router.push("/admin/depart/login");
  };

  return (
    <>
      <div className="quanju">
        {/*--顶部--*/}
        <div id="top">
          <Toppro>
            <MyBreadcrum param={breadItems} key="departHomePageBread" />
          </Toppro>
        </div>
        {/*--中间--*/}
        <div
          style={{
            width: "100%",
            height: "calc(100% - 50px)",
            flexDirection: "column",
            padding: 10,
            boxSizing: "border-box",
            backgroundColor: "#f0f2f5",
          }}
        >
          {/*--title--*/}
          <div
            style={{
              height: 80,
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
              alignItems: "center",
              background: "#f0f2f5",
            }}
          >
            <div style={{ fontSize: 20, fontWeight: "bold", marginLeft: 30 }}>
              <strong>組織管理</strong>
            </div>
            <ButtonToolbar
              aria-label="Toolbar with button groups"
              style={{ marginRight: 30 }}
            >
              <ButtonGroup className="me-2" aria-label="First group">
                <Button
                  variant="primary"
                  onClick={handleShow}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginLeft: "5px",
                  }}
                >
                  <CiInboxIn
                    style={{
                      fontSize: 22,
                    }}
                  />
                  エクスポート
                </Button>{" "}
                <Modal
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                  show={show}
                  onHide={handleClose}
                >
                  <Modal.Header>
                    <Modal.Title id="contained-modal-title-vcenter">
                      CSV出力
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    全ての組織をCSV形式でタウンロードします。
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
                    <Button variant="primary" onClick={handleClose}>
                      ダウンロード
                    </Button>
                  </Modal.Footer>
                </Modal>
              </ButtonGroup>
              <ButtonGroup className="me-2" aria-label="Second group">
                <Button
                  onClick={gotpage}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  一括操作
                  <AiOutlineCaretDown />
                </Button>
              </ButtonGroup>
              <ButtonGroup aria-label="Third group">
                <Button
                  variant="primary"
                  onClick={gotMyPage}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <AiFillPlusSquare />
                  新規追加
                </Button>
              </ButtonGroup>
            </ButtonToolbar>
          </div>

          {/*--背景颜色为白色部分--*/}
          <div
            style={{
              background: "#FFFFFF",
              boxSizing: "border-box",
              padding: 30,
              borderRadius: 10,
              height: "calc(100% - 10px)",
              marginLeft: 30,
              marginRight: 30,
            }}
          >
            {/*--中间白色背景--*/}
            <div
              style={{
                background: "#FFFFFF",
                boxSizing: "border-box",
                padding: 10,
                borderRadius: 10,
                marginTop: 20,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{ display: "flex", padding: 10, alignItems: "center" }}
              ></div>
              <div
                style={{ display: "flex", padding: 10, alignItems: "center" }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <InputGroup className="mb-3">
                    <Form className="d-flex">
                      <Form.Control
                        placeholder="組織名、組織コードで検索"
                        aria-label="組織名、組織コードで検索"
                        aria-describedby="basic-addon2"
                        type="search"
                        style={{
                          fontSize: 13,
                          border: "1px solid #B0AFAE",
                          height: "40px",
                          borderRadius: "5px 0 0 5px",
                        }}
                      />
                      <Button
                        variant="primary"
                        id="button-addon2"
                        style={{ borderRadius: "0 5px 5px 0" }}
                      >
                        <AiOutlineSearch
                          style={{
                            fontSize: 25,
                          }}
                        />
                      </Button>
                    </Form>
                  </InputGroup>
                </div>
              </div>
            </div>
            <div>
              {" "}
              <App />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

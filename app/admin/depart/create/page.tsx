"use client";
import { Badge, Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Toppro from "@/app/pages/topProfile";
import MyBreadcrum from "@/app/pages/breadrumb";

export default function CreatePage() {
  const breadItems = [
    { title: "組織管理", link: "/admin/depart" },
    { title: "組織登録", link: "/admin/depart/create" },
  ];
  const [inputValue, setInputValue] = useState("");
  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  };
  const handleClearClick = () => {
    setInputValue("");
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
            <strong>組織登録</strong>
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
                      placeholder="组織コードを入力してください。"
                      aria-label="组織コードを入力してください。"
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
                      placeholder="組織名を入力してください。"
                      aria-label="組織名を入力してください。"
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
              保存する
            </Button>{" "}
          </div>
        </div>
      </div>
    </>
  );
}

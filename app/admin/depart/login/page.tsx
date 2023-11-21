"use client";
import { Button, Form, InputGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ChangeEvent, useRef, useState } from "react";
import Toppro from "@/app/pages/topProfile";
import MyBreadcrum from "@/app/pages/breadrumb";

export default function LoginPage() {
  const breadItems = [
    { title: "組織管理", link: "/admin/depart" },
    { title: "組織一括登録", link: "/admin/depart/login" },
  ];
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string>("");
  const handleFileSelectClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
    } else {
      setSelectedFileName("");
    }
  };
  const isUploadButtonDisabled = !selectedFileName;

  return (
    <>
      <div id="new">
        <div id="daohang">
          <Toppro>
            <MyBreadcrum param={breadItems} key="departHomePageBread" />
          </Toppro>
        </div>
        <div id="top" style={{ marginTop: 30, marginLeft: 30 }}>
          <span
            style={{
              fontSize: 20,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <strong>組織一括登録</strong>
            <Button
              variant="primary"
              style={{
                fontSize: 15,
                marginRight: 20,
              }}
              disabled={isUploadButtonDisabled}
            >
              アップロード
            </Button>{" "}
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
            ファイル選択
          </span>
          <InputGroup className="mb-3">
            <Form className="d-flex">
              <Form.Control
                placeholder="選択されていません"
                aria-label="選択されていません"
                aria-describedby="basic-addon2"
                type="search"
                disabled
                value={selectedFileName}
                style={{
                  fontSize: 13,
                  border: "1px solid #B0AFAE",
                  width: 350,
                  height: "40px",
                  borderRadius: "5px 0 0 5px",
                  marginLeft: 25,
                }}
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
                onClick={handleFileSelectClick}
              >
                ファイル選択
              </Button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileInputChange}
              />
            </Form>
          </InputGroup>
          <Form.Select
            aria-label="Default select example"
            style={{ marginLeft: 25, width: 470 }}
          >
            <option>UTF-8</option>
            <option value="1">Shift_JIS</option>
          </Form.Select>
          <span style={{ marginTop: 15, marginLeft: 23, fontSize: 15 }}>
            ※「CSV出力」でダウンロードされたものをこ利用の場合、文字コードは｢UTF-8月を選択して下さい。
          </span>
        </div>
      </div>
    </>
  );
}

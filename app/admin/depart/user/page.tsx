"use client";
import "bootstrap/dist/css/bootstrap.min.css";
import Toppro from "@/app/pages/topProfile";
import MyBreadcrum from "@/app/pages/breadrumb";
import Table from "react-bootstrap/Table";
import { data } from "@/app/admin/depart/user/data";
import PagingControl from "@/app/admin/depart/user/PagingControl";
import { Row } from "react-bootstrap";

export default function UserPage() {
  const breadItems = [
    { title: "組織管理", link: "/admin/depart" },
    { title: "組織ユーザー", link: "/admin/depart/user" },
  ];

  return (
    <>
      <div className="quanju">
        {/*--顶部--*/}
        <div id="top">
          <Toppro>
            <MyBreadcrum param={breadItems} key="departHomePageBread" />
          </Toppro>
        </div>

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
            <strong>組織ユーザー一覧</strong>
          </div>
          <div style={{ marginRight: 40 }}>
            <PagingControl />
          </div>
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
          <Table style={{ marginTop: "30px" }}>
            <thead>
              <tr>
                <th style={{ width: "20%" }}>組織ユーザー名</th>
                <th style={{ width: "30%" }}>組織ユーザーID</th>
                <th style={{ width: "20%" }}></th>
                <th style={{ width: "10%" }}>権限</th>
                <th style={{ width: "20%" }}>更新日</th>
              </tr>
            </thead>
            <tbody>
              {data.report.map((link, index) => (
                <>
                  <tr>
                    <td>{link.user_name}</td>
                    <td>{link.user_id}</td>
                    <td>{link.mail}</td>
                    <td>{link.position}</td>
                    <td>{link.upd_date}</td>
                    <td></td>
                  </tr>
                </>
              ))}
            </tbody>
          </Table>
          <Row>
            <div id="bottom">
              <PagingControl />
            </div>
          </Row>
        </div>
      </div>
    </>
  );
}

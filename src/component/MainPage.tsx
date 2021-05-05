import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button, Navbar, Nav, Container, Row, Col } from "react-bootstrap";
import Skill from './Skill';

const MainPage: React.FC<Props> = (props) => {
  const iconStyle = {
    width: "250px",
    height: "250px",
    borderRadius: "50%",
    display: "block",
    margin: "0 auto"
  }
  const syozokuStyle = {

  }
  return (
    <div>
      <Container>
        <Row style={{ marginTop: "10px" }}>
          <Col xs={12} md={4}>
            <img src="./img/_myicon.jpg" alt="icon" style={iconStyle} />
          </Col>
          <Col xs={12} md={8}>
            <h4 style={{ fontSize: "30px", margin: "0 0 0 0", textAlign: "center" }}>最上土川</h4>
            <h5 style={{ fontSize: "16px", margin: "0 0 5px 0", textAlign: "center" }}>MogamiTsuchikawa</h5>
            <p style={{ textAlign: "center" }}>Webフロントエンド・バックエンド開発からゲーム開発、スマホアプリ開発、組み込み系など幅広く開発をしている大学生です</p>
            <h4 style={{ margin: "10px 0 5px 0", textAlign: "center" }}>所属</h4>
            <p style={{ fontSize: "14px", margin: "0 0 0 0", textAlign: "center" }}>芝浦工業大学 電気工学科 2年</p>
            <p style={{ fontSize: "14px", margin: "0 0 0 0", textAlign: "center" }}>Gaiax XS事業部 インターン</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2 style={{ textAlign: "center", margin: "40px 0 10px 0" }}>Work</h2>
            <p style={{ textAlign: "center", margin: "40px 0 10px 0" }}>作った物は<a href={"/work"}>こちら</a>から</p>
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <h2 style={{ textAlign: "center", margin: "40px 0 10px 0" }}>Skill</h2>
          </Col>
          <Skill title={"React"} content={"フロントエンドフレームワーク "} usedFor={"インターンやサークルで使用"} iClassName={"devicon-react-original colored"} />
          <Skill title={"TypeScript"} content={"JavaScriptに型とクラスベースオブジェクトを追加した言語 "} usedFor={"主にReactと合わせて利用"} iClassName={"devicon-typescript-plain colored"} />
          <Skill title={"Bootstrap"} content={"CSSライブラリ"} usedFor={"インターンでの業務やサークルのグループウェアやWebサイト、このサイトなどで使用"} iClassName={"devicon-bootstrap-plain colored"} />
          <Skill title={"Django"} content={"Pythonのバックエンドフレームワーク"} usedFor={"サークルでグループウェアの開発やインターンでAPIサーバーとして使用"} iClassName={"devicon-django-plain colored"} />
          <Skill title={"Python"} content={"インタプリンタ言語"} usedFor={"Djangoと合わせて使用したり、簡単なデータ処理、大学でライントレースカーの作成に使用"} iClassName={"devicon-python-plain colored"} />
          <Skill title={"WPF , WindowsForm"} content={"Windows向けGUIフレームワーク"} usedFor={"GUIアプリ開発ポータブルソフト、C#_GOの開発などで使用"} iClassName={"devicon-dot-net-plain-wordmark colored"} />
          <Skill title={"C#"} content={"MSのオブジェクト指向言語"} usedFor={"中学生時代からWPF,Form,Xamarin,Unityなどで使用"} iClassName={"devicon-csharp-plain colored"} />
          <Skill title={"Git"} content={"バージョン管理ソフト"} usedFor={"普段から開発で使用"} iClassName={"devicon-git-plain-wordmark colored"} />
          <Skill title={"HTML5"} content={""} usedFor={"普段から開発で使用"} iClassName={"devicon-html5-plain-wordmark colored"} />
          <Skill title={"CSS3"} content={""} usedFor={"前ポートフォリオサイトではCSSライブラリを使わず全てCSSを記述"} iClassName={"devicon-css3-plain-wordmark colored"} />
          <Skill title={"Swift"} content={"Appleデバイス向け言語"} usedFor={"受注案件にてMacアプリ、iOSアプリの開発に使用"} iClassName={"devicon-swift-plain colored"} />
          <Skill title={"Debian"} content={"DebianLinuxOS"} usedFor={"ファイルサーバーやMinecraftサーバーに使用"} iClassName={"devicon-debian-plain-wordmark colored"} />
          <Skill title={"Ruby"} content={"日本産のプログラミング言語"} usedFor={"RubyOnRailsで触ったことがある程度"} iClassName={"devicon-ruby-plain colored"} />
          <Skill title={"Electron"} content={"Web技術を使用したデスクトップアプリフレームワーク"} usedFor={"社内ハッカソンにてMDエディタを作る際に使用"} iClassName={"devicon-electron-original colored"} />
        </Row>
      </Container>
    </div>
  );
}
type Props = void;
export default MainPage;

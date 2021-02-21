import { BrowserRouter as Router, Route } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Terminal from 'terminal-in-react';
import { stringify } from 'querystring';

const TerminalPage: React.FC<Props> = (props) => {
  const aboutme = () => {
    return `
ハンドルネーム  :  最上土川(MogamiTsuchikawa)
所属  :  芝浦工業大学
    `
  }
  const showHelp = () => {
    const helps = [
      {
        name:'aboutme',
        description:'自己紹介を表示'
      },
      {
        name:'twitter',
        description:'Twitterを開く'
      },
      {
        name:'github',
        description:'GitHubを開く'
      }
    ]
    let rtn:string="";
    helps.map((value:{name:string,description:string}) => {
      rtn += value.name + "\t: " + value.description + "\n";
    });
    return rtn;
  }
  return (
    <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh"
        }}
      >
        <Terminal
          color='green'
          backgroundColor='black'
          barColor='black'
          style={{ fontWeight: "bold", fontSize: "1em" }}
          commands={{
            'help':showHelp,
            'aboutme':aboutme,
            twitter: () => window.open('https://twitter.com/MogamiTsuchikaw','_blank'),
            github: () => window.open('https://github.com/MogamiTsuchikawa','_blank')
          }}
          msg=''
        />
      </div>
  );
}
type Props = void;
export default TerminalPage;

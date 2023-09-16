import React from 'react'
import menu from "../assets/styles/menu.module.scss";
import { useState } from "react";

import HelpSvg from '../assets/svg/HelpSvg';

export default function HelpMenu() {
    
    const [InsertIsOpen, setInsertIsOpen] = useState(false);
  
  return (
    <div
    onMouseLeave={() => {
      setInsertIsOpen(false);
    }}
    onMouseEnter={() => {
      setInsertIsOpen(true);
    }}
    className={menu.top_menu__text}
  >
    <div>Помощь</div>
    {InsertIsOpen && (
      <div className={menu.drop_menu}>

        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <HelpSvg />
            Помощь
          </div>
          <div className={menu.combination_buttons}>Alt+0</div>
        </div>

      </div>
    )}
  </div>
  )
}

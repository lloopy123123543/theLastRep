import React from 'react'
import { useState } from "react";
import menu from "../assets/styles/menu.module.scss";

import Exportfile from "../assets/svg/Export_file";
import ArrowSvg from "../assets/svg/ArrowSvg";
import PrintSvg from "../assets/svg/PrintSvg";

export default function FileMenu() {
  const [FileIsOpen, setFileIsOpen] = useState(false);
  const [PrintSideIsOpen, setPrintSideIsOpen] = useState(false);
  return (
    <div
    onMouseLeave={() => {
      setFileIsOpen(false);
    }}
    onMouseEnter={() => {
      setFileIsOpen(true);
    }}
    className={menu.top_menu__text}
  >
    <div>Файл</div>
    {/* Логика открытия файла  */}
    {FileIsOpen && (
      <div className={menu.drop_menu}>
        {/* Логика открытия подменю */}
        <div
          onMouseLeave={() => {
            setPrintSideIsOpen(false);
          }}
          onMouseEnter={() => {
            setPrintSideIsOpen(true);
          }}
          className={menu.drop_menu__row}
        >
          <div className={menu.contain}>
            <Exportfile />
            Экспорт
          </div>
          <ArrowSvg />
          {PrintSideIsOpen && (
            <div
              onMouseLeave={() => {
                setPrintSideIsOpen(false);
              }}
              onMouseEnter={() => {
                setPrintSideIsOpen(true);
              }}
              className={menu.drop_side_menu}
            >
              <div className={menu.drop_side_menu_item}>PDF</div>
            </div>
          )}
        </div>

        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <PrintSvg />
            Печать
          </div>
          <div className={menu.combination_buttons}>Ctrl+P</div>
        </div>
      </div>
    )}
  </div>
  )
}

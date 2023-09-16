import React from 'react'
import { useState } from "react";

import menu from "../assets/styles/menu.module.scss";

import UndoSvg from "../assets/svg/UndoSvg";
import RedoSvg from "../assets/svg/RedoSvg";
import CutSvg from "../assets/svg/CutSvg";
import CopySvg from "../assets/svg/CopySvg";
import PasteSvg from "../assets/svg/PasteSvg";
import SelectAllSvg from "../assets/svg/SelectAllSvg";

export default function EditMenu() {
    

    const [EditIsOpen, setEditIsOpen] = useState(false);
  

  return (
    <div
    onMouseLeave={() => {
      setEditIsOpen(false);
    }}
    onMouseEnter={() => {
      setEditIsOpen(true);
    }}
    className={menu.top_menu__text}
  >
    <div>Изменить</div>
    {EditIsOpen && (
      <div className={menu.drop_menu}>
        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <UndoSvg />
            Отменить
          </div>
          <div className={menu.combination_buttons}>Ctrl+Z</div>
        </div>
        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <RedoSvg />
            Вернуть
          </div>
          <div className={menu.combination_buttons}>Ctrl+Y</div>
        </div>
        <div className={menu.line}></div>
        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <CutSvg />
            Вырезать
          </div>
          <div className={menu.combination_buttons}>Ctrl+X</div>
        </div>
        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <CopySvg />
            Копировать
          </div>
          <div className={menu.combination_buttons}>Ctrl+C</div>
        </div>
        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <PasteSvg />
            Вставить
          </div>
          <div className={menu.combination_buttons}>Ctrl+V</div>
        </div>
        <div className={menu.line}></div>

        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <SelectAllSvg />
            Выбрать все
          </div>
          <div className={menu.combination_buttons}>Ctrl+A</div>
        </div>
      </div>
    )}
  </div>
  )
}

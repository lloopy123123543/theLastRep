import React from 'react'
import menu from "../assets/styles/menu.module.scss";
import { useState } from "react";

import ArrowSvg from "../assets/svg/ArrowSvg";
import ImageSvg from "../assets/svg/ImageSvg";
import LinkSvg from "../assets/svg/LinkSvg";
import MediaSvg from "../assets/svg/MediaSvg";
import TableSvg from "../assets/svg/TableSvg";
import HorizontalLine from "../assets/svg/HorizontalLine";

export default function InsertMenu() {
    const cols = 10;
    const rows = 10;
    const [Position, setPosition] = useState({ x: 0, y: 0 });

    const [InsertIsOpen, setInsertIsOpen] = useState(false);
  
    const [TableSideIsOpen, setTableSideIsOpen] = useState(false);
  

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
    <div>Вставить</div>
    {InsertIsOpen && (
      <div className={menu.drop_menu}>
        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <ImageSvg />
            Изображение...
          </div>
        </div>

        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <LinkSvg />
            Ссылка...
          </div>
          <div className={menu.combination_buttons}>Ctrl+K</div>
        </div>

        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <MediaSvg />
            Медиа...
          </div>
        </div>

        <div
          onMouseLeave={() => {
            setTableSideIsOpen(false);
          }}
          onMouseEnter={() => {
            setTableSideIsOpen(true);
          }}
          className={menu.drop_menu__row}
        >
          <div className={menu.contain}>
            <TableSvg />
            Таблица
          </div>
          <ArrowSvg />
          {TableSideIsOpen && (
            <div
              onMouseLeave={() => {
                setTableSideIsOpen(false);
              }}
              onMouseEnter={() => {
                setTableSideIsOpen(true);
              }}
              className={menu.drop_side_menu}
            >
              <div className={menu.create_table}>
                {Array(rows)
                  .fill(0)
                  .map((item1, indexY) => (
                    <div key={indexY}>
                      {Array(cols)
                        .fill(0)
                        .map((item2, indexX) => (
                          <button
                            key={indexX}
                            className={menu.create_table__cell}
                            onMouseEnter={() =>
                              setPosition({ x: indexX, y: indexY })
                            }
                            style={{
                              backgroundColor:
                                indexX <= Position.x &&
                                indexY <= Position.y
                                  ? "#8eb5f1"
                                  : "",
                            }}
                          ></button>
                        ))}
                    </div>
                  ))}
                <div></div>
              </div>
              <div>
                {Position.x + 1}х{Position.y + 1}
              </div>
            </div>
          )}
        </div>

        <div className={menu.line}></div>
        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
            <HorizontalLine />
            Горизонтальная линия
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

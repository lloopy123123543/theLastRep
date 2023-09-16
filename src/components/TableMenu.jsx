import React from 'react'
import { useState } from "react";
import menu from "../assets/styles/menu.module.scss";

import ArrowSvg from "../assets/svg/ArrowSvg";
import TableSvg from "../assets/svg/TableSvg";
import CellPropertiesSvg from "../assets/svg/CellPropertiesSvg";
import MergeCellsSvg from "../assets/svg/MergeCellsSvg";
import SplitCellsSvg from "../assets/svg/SplitCellsSvg";

import InsertRowBeforeSvg from "../assets/svg/InsertRowBeforeSvg";
import InsertRowAfterSvg from "../assets/svg/InsertRowAfterSvg";
import DeleteRowSvg from "../assets/svg/DeleteRowSvg";
import RowPropertiesSvg from "../assets/svg/RowPropertiesSvg";
import CutRowSvg from "../assets/svg/CutRowSvg";
import CopyRowSvg from "../assets/svg/CopyRowSvg";
import PasteRowBeforeSvg from '../assets/svg/PasteRowBeforeSvg';
import PasteRowAfterSvg from '../assets/svg/PasteRowAfterSvg';

import InsertColumnBeforeSvg from "../assets/svg/InsertColumnBeforeSvg";
import InsertColumnAfterSvg from "../assets/svg/InsertColumnAfterSvg";
import DeleteColumnSvg from "../assets/svg/DeleteColumnSvg";
import CutColumnSvg from "../assets/svg/CutColumnSvg";
import CopyColumnSvg from "../assets/svg/CopyColumnSvg";
import PasteColumnBeforeSvg from "../assets/svg/PasteColumnBeforeSvg";
import PasteColumnAfterSvg from "../assets/svg/PasteColumnAfterSvg";
import DeleteTableSvg from '../assets/svg/DeleteTableSvg';



export default function TableMenu(props) {
    const cols = 10;
    const rows = 10;
    const [Position, setPosition] = useState({ x: 0, y: 0 });

    const [InsertIsOpen, setInsertIsOpen] = useState(false);
    const [TableSideIsOpen, setTableSideIsOpen] = useState(false);

    const [BlocksDropDown, setBlocksDropDown] = useState(false);

    const [RowDropDown, setRowDropDown] = useState(false);

    const [ColumnDropDown, setColumnDropDown] = useState(false);

    const [SortTable, setSortTable] = useState(false)
  

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
    <div>{props.name ? <TableSvg/> :<div>Таблица</div>}</div>
    {InsertIsOpen && (
      <div className={menu.drop_menu}>
        <div
          onMouseLeave={() => {
            setBlocksDropDown(false);
          }}
          onMouseEnter={() => {
            setBlocksDropDown(true);
          }}
          className={menu.drop_menu__row}
        >
          <div className={menu.contain}>
            Ячейки
          </div>
          <ArrowSvg />
          {BlocksDropDown && (
            <div
            style={{marginTop:"50px"}}
              onMouseLeave={() => {
                setBlocksDropDown(false);
              }}
              onMouseEnter={() => {
                setBlocksDropDown(true);
              }}
              className={menu.drop_side_menu}
            >
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <CellPropertiesSvg/>
                Свойства ячейки
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <MergeCellsSvg/>
                Объеденить ячейки
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <SplitCellsSvg/>
                Разъеденить ячейки
              </div>
              </div>
            </div>
          )}
        </div>

        <div
          onMouseLeave={() => {
            setRowDropDown(false);
          }}
          onMouseEnter={() => {
            setRowDropDown(true);
          }}
          className={menu.drop_menu__row}
        >
          <div className={menu.contain}>
            Строки
          </div>
          <ArrowSvg />
          {RowDropDown && (
            <div
            style={{marginTop:"150px"}}
              onMouseLeave={() => {
                setRowDropDown(false);
              }}
              onMouseEnter={() => {
                setRowDropDown(true);
              }}
              className={menu.drop_side_menu}
            >

              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <InsertRowBeforeSvg/>
                Создать строку перед
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <InsertRowAfterSvg/>
                Создать строку после
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <DeleteRowSvg/>
                Удалить строку
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <RowPropertiesSvg/>
                Свойства Строки
              </div>
              </div>
              <div className={menu.line}></div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <CutRowSvg/>
                Вырезать строку
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <CopyRowSvg/>
                Копировать строку
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <PasteRowBeforeSvg/>
                Вставить строку до
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <PasteRowAfterSvg/>
                Вставить строку после
              </div>
              </div>
            </div>
          )}
        </div>

        <div
          onMouseLeave={() => {
            setColumnDropDown(false);
          }}
          onMouseEnter={() => {
            setColumnDropDown(true);
          }}
          className={menu.drop_menu__row}
        >
          <div className={menu.contain}>
            Колонки
          </div>
          <ArrowSvg />
          {ColumnDropDown && (
            <div
            style={{marginTop:"150px"}}
              onMouseLeave={() => {
                setColumnDropDown(false);
              }}
              onMouseEnter={() => {
                setColumnDropDown(true);
              }}
              className={menu.drop_side_menu}
            >
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <InsertColumnBeforeSvg/>
                Создать колонку перед
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <InsertColumnAfterSvg/>
                Создать колонку после
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <DeleteColumnSvg/>
                Удалить колонку
              </div>
              </div>
              <div className={menu.line}></div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <CutColumnSvg/>
                Вырезать колонку
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <CopyColumnSvg/>
                Копировать колонку
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <PasteColumnBeforeSvg/>
                Вставить колонку до
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                <PasteColumnAfterSvg/>
                Вставить колонку после
              </div>
              </div>
            </div>
          )}
        </div>

        <div
          onMouseLeave={() => {
            setSortTable(false);
          }}
          onMouseEnter={() => {
            setSortTable(true);
          }}
          className={menu.drop_menu__row}
        >
          <div className={menu.contain}>
            Сортировка
          </div>
          <ArrowSvg />
          {SortTable && (
            <div
              onMouseLeave={() => {
                setSortTable(false);
              }}
              onMouseEnter={() => {
                setSortTable(true);
              }}
              className={menu.drop_side_menu}
            >

              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                Сортировка колонок к наибольшему
              </div>
              </div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                Сортировка колонок к наименьшему
              </div>
              </div>
              <div className={menu.line}></div>
              <div className={menu.drop_menu__row}>
              <div className={menu.sub_drop_down_menu}>
                Расширенная сортировка
              </div>
              </div>
            </div>
          )}
        </div>

        <div className={menu.line}></div>
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
              <div className={menu.sub_drop_down_menu}>
                Свойства таблицы
              </div>
        </div>
        
        <div className={menu.drop_menu__row}>
          <div className={menu.contain}>
          <DeleteTableSvg/>
                Удалить таблицу
          </div>
              </div>

      </div>
    )}
  </div>
  )
}
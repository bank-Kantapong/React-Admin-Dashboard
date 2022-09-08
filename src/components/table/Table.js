import { useEffect, useState } from "react";
import "./table.css";

const Table = ({ headerData, renderHead, bodyData, renderBody, limit }) => {
  const [dataShow, setDataShow] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);

  let pages = 1;
  let range = [];

  const initDataShow = limit && bodyData ? bodyData?.slice(0, limit) : bodyData;

  useEffect(() => {
    if (!dataShow) setDataShow(initDataShow);
  }, [dataShow, initDataShow]);

  if (limit && limit !== 0) {
    let page = Math.floor(bodyData?.length / limit);
    pages = bodyData?.length % limit === 0 ? page : page + 1;
    range = [...Array(pages).keys()];
  }

  const selectPage = (page) => {
    const start = limit * page;
    const end = start + limit;

    setDataShow(bodyData?.slice(start, end));
    setCurrentPage(page);
  };

  return (
    <div>
      <div className="table-wrapper">
        <table>
          {headerData && renderHead && (
            <thead>
              <tr>
                {headerData?.map((item, index) => renderHead(item, index))}
              </tr>
            </thead>
          )}
          {bodyData && renderBody && (
            <tbody>
              {dataShow?.map((item, index) => renderBody(item, index))}
            </tbody>
          )}
        </table>
      </div>
      {pages > 1 && (
        <div className="table__pagination">
          {range?.map((item, index) => (
            <div
              className={`table__pagination-item ${
                currentPage === index ? "active" : ""
              }`}
              onClick={() => selectPage(index)}
              key={index}
            >
              {item + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Table;

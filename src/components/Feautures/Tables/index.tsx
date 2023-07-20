import React from 'react'

type Obj = { [key: string | number]: string }
interface TableProps {
  header: string[]
  body?: (string | number)[][]
  // onRowClick?: (bodyFullData?: any) => void
  // onClick?: (bodyFullData?: any, row?: number, column?: number) => void
  bodyFullData?: any

  rowCursor?: string
  headerStyle?: Obj
  bodyStyle?: Obj
  status?: string
}

const Table = ({
  header,
  body,

  bodyFullData,
  rowCursor,
  headerStyle,
  bodyStyle,
}: // onRowClick,
// onClick
TableProps) => {
  // let statusStyle = {
  //   backgroundColor: status === 'Under review'  ? "#0082AA" : "##DE4A09",
  //   borderRadius: "10px",
  //   padding: "5px 10px",
  // };
  // const handleRowClick = (e: any, index: number) => {
  //   if (onRowClick) onRowClick(bodyFullData[index])
  // }

  // const handleCellClick = (e: any, row: number, column: number) => {
  //   if (onClick) onClick(bodyFullData[row], row + 1, column + 1)
  // }
  return (
    <table className="bg-gray-100 min-w-full border-spacing-0">
      <thead
        className="w-full bg-gray-100 text-gray-900 text-base"
        style={headerStyle}
      >
        <tr className="w-full ">
          {header?.map((text, index) => (
            <th
              className="text-sm leading-5 text-left px-6 py-5 text-gray-900 font-medium max-w-max"
              key={index}
            >
              {text}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="w-full" style={bodyStyle}>
        {body?.map((each, row) => (
          <tr
            className="w-full"
            key={row}
            // onClick={(e) => handleRowClick(e, row)}
            style={{ cursor: rowCursor || '' }}
          >
            {each?.map((el: any, column) => (
              <td
                className={`text-sm leading-5 text-left px-6 py-5 m-0 font-normal overflow-hidden max-w-max ${
                  each[each.length - 1] === 'Under review' &&
                  column === each.length - 1
                    ? 'text-[#0082AA]'
                    : each[each.length - 1] === 'Completed' &&
                      column === each.length - 1
                    ? 'text-[#DE4A09]'
                    : each[each.length - 1] === 'Paid' &&
                      column === each.length - 1
                    ? 'text-[#00D448]'
                    : 'text-gray-900'
                }`}
                key={column}
                // style={statusStyle}
                //onClick={(e) => handleCellClick(e, row, column)}
              >
                {el}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table

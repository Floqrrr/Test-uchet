import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { getData } from "./actions/actions";
import { SendTodoAddproduct } from "./actions/sendTodo";
import styled from 'styled-components'
import { useTable, useSortBy } from 'react-table'

const initialState = {
    name: "",
    count: "",
    price: "",
    manufactured_time: "",
    expiration_date: "",
    manufacturer_id: 1,
    categories_id: 1


};

const Styles = styled.div`
  padding: 2.5rem;

  table {
    border-spacing: 0;
    border:1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

function Table({ columns, data }) {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 10)

  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  {/* Add a sort direction indicator */}
                  <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {firstPageRows.map(
            (row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map(cell => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    )
                  })}
                </tr>
              )}
          )}
        </tbody>
      </table>
      <br />
      <div>Выводятся первые 10 товаров из {rows.length} товаров</div>
    </>
  )
}

const AddProduct = ({ history }) => {

    const columns = React.useMemo(
        () => [
          {
            Header: 'Список товаров',
            columns: [
              {
                Header: 'Название',
                accessor: 'name',
              },
              {
                Header: 'Количество',
                accessor: 'count',
              },
              {
                Header: 'Цена',
                accessor: 'price',
              },
            ],
          }
        ],
        []
      )

    const [formData, setFormData] = useState(initialState);
    const [data, setData] = useState();

  const OnChange = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const OnSubmit = (e) => {
    e.preventDefault();

    if(formData.name === "")
    {
      alert("Введите название товара")
    }
    else
    {
        if(formData.count <= 0 || formData.count.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
        {
            alert("Введите правильное количество")
        }
        else
        {
            if(formData.price <= 0 || formData.price.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
            {
                alert("Введите правильную цену")
            }
            else
            {
                if(formData.manufactured_time <= 0 || formData.manufactured_time.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
                {
                    alert("Введите правильную дату")
                }
                else
                {
                    if(formData.expiration_date <= 0 || formData.expiration_date.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
                    {
                        alert("Введите правильную дату")
                    }
                    else
                    {
                        SendTodoAddproduct(formData);
                        history.push('/')
                    }
                }
            }
        }
    }
    //console.log(formData);
  };

  const { name, count, price, manufactured_time, expiration_date, manufacturer_id, categories_id } = formData;

  useEffect(() => {
    getData().then((result) => setData(result));
  }, [getData]);

  return data == null ? (
    <h1>loading</h1>
  ) : (
        <Fragment>
            <h1 className="text-center my-4">Добавление товара</h1>
                <Row className="justify-content-center">
                <Col className="col-md-4">
                <Styles>
                    <Table columns={columns} data={data.products} />
                </Styles>
                </Col>
                <Col className="col-md-4">
                <Form className="ml-3 mr-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Введите название товара</Form.Label>
                        <Form.Control placeholder="Название товара" type="text" name="name" value={name} onChange={OnChange}/>
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Укажите количество</Form.Label>
                        <Form.Control placeholder="Количество в шт." type="text" name="count" value={count} onChange={OnChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Укажите цену</Form.Label>
                        <Form.Control placeholder="За одну шт. в руб." type="text" name="price" value={price} onChange={OnChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Укажите дату изготовления</Form.Label>
                        <Form.Control placeholder="Год.Месяц.Дата" type="text" name="manufactured_time" value={manufactured_time} onChange={OnChange}/>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Укажите срок годности</Form.Label>
                        <Form.Control placeholder="Год.Месяц.Дата"  type="text" name="expiration_date" value={expiration_date} onChange={OnChange}/>
                    </Form.Group>
                    <Form.Label>Выберите поставщика</Form.Label>
                    <Form.Group className="mb-3">
                    <Form.Control as="select" name="manufacturer_id" onChange={OnChange}  value={manufacturer_id}>
                    {data.manufacturers.map((item) => (
                        <option
                        as="button"
                        id={manufacturer_id}
                        value={item.id}
                        key={item.id}
                        >
                        {"Компания: " +item.name + " " + item.country}
                        </option>
                    ))}
                    </Form.Control>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Выберите категорию</Form.Label>
                    <Form.Control as="select" name="categories_id" onChange={OnChange}  value={categories_id}>
                    {data.categoriess.map((item) => (
                        <option
                        as="button"
                        id={categories_id}
                        value={item.id}
                        key={item.id}
                        >
                        {item.name}
                        </option>
                    ))}
                    </Form.Control>
                    </Form.Group>
                    <Button onClick={OnSubmit} variant="primary" type="submit">
                        Добавить
                    </Button>
                </Form>
                </Col>
                </Row>
        </Fragment>
    );
};

export default AddProduct;
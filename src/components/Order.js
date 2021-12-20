import React, { Fragment, useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { getData } from "./actions/actions";
import { updateProductOrder, SendTodoAddOrder } from "./actions/sendTodo";
import download from "downloadjs";
import path from 'path';
import fs from 'fs';
import fontkit from '@pdf-lib/fontkit';
import {PDFDocument, PDFForm, StandardFonts, PDFFont, rgb} from 'pdf-lib';


async function createPdf(namep , nprice, ncount) {
    const url = 'https://pdf-lib.js.org/assets/ubuntu/Ubuntu-R.ttf'
    const fontBytes = await fetch(url).then(res => res.arrayBuffer())

    // Create a new PDFDocument
    const pdfDoc = await PDFDocument.create()

    // Register the `fontkit` instance
    pdfDoc.registerFontkit(fontkit)

    // Embed our custom font in the document
    const customFont = await pdfDoc.embedFont(fontBytes)

    // Add a blank page to the document
    const page = pdfDoc.addPage()

    var date = new Date();
    var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric'
      };

    // Create a string of text and measure its width and height in our custom font
    const text = 'Чек'
    const ntext = `Наименование товара: ${namep}`;
    const ptext = `Цена товара за шт: ${nprice} руб.`;
    const сtext = `Количество товара: ${ncount} шт.`;
    const sdate = date.toLocaleString("ru", options);
    const itog = nprice * ncount;
    const itext = `Итого: ${itog} руб.`;
    const textSize = 35
    
    
    // Draw the string of text on the page
    page.drawText(text, {
      x: 270,
      y: 700,
      size: textSize,
      font: customFont,
      color: rgb(0, 0, 0),
    })

    page.drawText(sdate, {
        x: 200,
        y: 670,
        size: 18,
        font: customFont,
        color: rgb(0, 0, 0),
      })

    page.drawText(ntext, {
        x: 100,
        y: 600,
        size: 18,
        font: customFont,
        color: rgb(0, 0, 0),
      })

    page.drawText(ptext, {
        x: 100,
        y: 580,
        size: 18,
        font: customFont,
        color: rgb(0, 0, 0),
      })

    page.drawText(сtext, {
        x: 100,
        y: 560,
        size: 18,
        font: customFont,
        color: rgb(0, 0, 0),
      })

    page.drawText(itext, {
        x: 350,
        y: 480,
        size: 30,
        font: customFont,
        color: rgb(0, 0, 0),
      })

    // Serialize the PDFDocument to bytes (a Uint8Array)
    const pdfBytes = await pdfDoc.save()

          // Trigger the browser to download the PDF document
    download(pdfBytes, "чек.pdf", "application/pdf");

}

const initialState = {
    name: "",
    post: "",
    count: "",
    product_id: ""
};

const AddCategory = ({ history }) => {

    const [formData, setFormData] = useState(initialState);
    const [formData1, setFormData1] = useState(initialState);
    const [data, setData] = useState();
    

  const OnChange = (e) => {
    console.log(e.target);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sell = ()=> {

    if (formData.count === "")
    {
      alert("Введие верное количество")
    }
    else if(0 == formData.count)
    {
      alert("Введие верное количество")
    }
    else if(0 > formData.count)
    {
      alert("Введие верное количество")
    }
    else if(formData.count.match(/^([а-яё][А-ЯЁ]+|[a-z][A-Z]+)$/i))
    {
      alert("Введие верное количество")
    }
    else
    {
        updateProductOrder(formData, data.products.find((item) => item.name == history.location.pathname.toString().slice(7)).id);
        formData.product_id = data.products.find((item) => item.name == history.location.pathname.toString().slice(7)).id;
        formData.name = data.products.find((item) => item.name == history.location.pathname.toString().slice(7)).name
        formData.price =data.products.find((item) => item.name == history.location.pathname.toString().slice(7)).price;
        formData.id = data.products.find((item) => item.name == history.location.pathname.toString().slice(7)).id;
        SendTodoAddOrder(formData);
        createPdf(formData.name, formData.price, formData.count)
        //console.log(data.products.find((item) => item.name == history.location.pathname.toString().slice(7)).id);
        history.push("/main")
    }  
  }






  const {id, name, count, seller_id, product_id} = formData;
  
 

  useEffect(() => {
    getData().then((result) => setData(result));
  }, [getData]);

  return data == null ? (
    <h1>loading</h1>
  ) : (
        <Fragment>
            <h1 className="text-center my-4">Оформление товара</h1>
                <Row className="justify-content-center">
                <Col className="col-md-5">
                <Form className="ml-3 mr-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Label>Название товара: { data.products.find((item) => item.name == history.location.pathname.toString().slice(7)).name }</Form.Label>
                    </Form.Group>
                    
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Количество товара: { data.products.find((item) => item.name == history.location.pathname.toString().slice(7)).count } шт.</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Цена товара:  { data.products.find((item) => item.name == history.location.pathname.toString().slice(7)).price } руб.</Form.Label>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Продавец</Form.Label>
                    <Form.Control as="select" name="seller_id" onChange={OnChange}  value={seller_id}>
                    {data.sellers.map((item) => (
                        <option
                        as="button"
                        id={seller_id}
                        value={item.id}
                        key={item.id}
                        >
                        {item.name + " " + item.surname}
                        </option>
                    ))}
                    </Form.Control>
                   
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Укажите количество покупаемого товара</Form.Label>
                        <Form.Control placeholder="шт."  type="text" name="count" value={count} onChange={OnChange}/>
                    </Form.Group>
                    <Button className="mb-3" onClick={sell} variant="outline-success">
                        Продать
                    </Button>
                </Form>
                </Col>
                </Row>
        </Fragment>
    );
};

export default AddCategory;
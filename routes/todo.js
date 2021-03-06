const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const connectDB = require('../config/database');

//Запросы для сотрудников

router.get("/seller:id",async (req,res) => {
    let sql = `SELECT * FROM seller WHERE id = ${req.params.id} LIMIT 1`;
    connectDB.query(sql, (err, result) => {
        if(err) {
           res.status(500).send
           throw err; 
        }
        else res.json(result);
    })
});

router.get("/seller", async (req,res) => {
    let sql = "SELECT * FROM seller";
    connectDB.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

router.post(
    "/seller",
    [
        check("name", "Укажите имя").not().isEmpty(),
        check("surname", "Укажите Фамилию").not().isEmpty(),
        check("departament_id", "Укажите отдел").not().isEmpty(),
        check("post_id", "Укажите должность").not().isEmpty(),
        check("year_of_birth", "Укажите дата").not().isEmpty(),
        check("admission", "Укажите отдел").not().isEmpty(),
        check("experience", "Укажите стаж").not().isEmpty(),
        check("sex", "Укажите пол").not().isEmpty(),
        check("address", "Укажите адрес").not().isEmpty(),
        check("city", "Укажите город").not().isEmpty(),
        check("number", "Укажите номер").not().isEmpty(),

    ],

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {name, surname, departament_id, post_id, year_of_birth, admission, experience, sex, address, city,  number} = req.body;
        let data = {name, surname, departament_id, post_id, year_of_birth, admission, experience, sex, address, city,  number};
        let sql = "INSERT INTO seller SET ?";

        connectDB.query(sql, data, (err, result) => {
            if (err) {
                res.status(500).send("Errors server");
                throw err;
            } else res.send("Сотрудник добавлен");
        })

    }
);
    router.put(
        "/seller",
        [
            check("name", "Укажите имя").not().isEmpty(),
            check("surname", "Укажите Фамилию").not().isEmpty(),
            check("departament_id", "Укажите отдел").not().isEmpty(),
            check("post_id", "Укажите должность").not().isEmpty(),
            check("year_of_birth", "Укажите дата").not().isEmpty(),
            check("admission", "Укажите отдел").not().isEmpty(),
            check("experience", "Укажите стаж").not().isEmpty(),
            check("sex", "Укажите пол").not().isEmpty(),
            check("address", "Укажите адрес").not().isEmpty(),
            check("city", "Укажите город").not().isEmpty(),
            check("number", "Укажите номер").not().isEmpty(),
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
            const {name, surname, departament_id, post_id, year_of_birth, admission, experience, sex, address, city,  number} = req.body;
            let sql = `UPDATE seller SET name = "${name}", surname = "${surname}", departament_id = "${departament_id}", post_id = "${post_id}", year_of_birth = "${year_of_birth}", admission = "${admission}", experience = "${experience}", sex = "${sex}", address = "${address}", city = "${city}", number = "${number}" WHERE id = "${id}"`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Сотрудник обновлен");
            });		
        }
    );
    
    router.delete(
        "/seller/:id",
        [check("id", "Вы не выбрали сотрудника")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM seller WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Сотрудник удален");
            });
        }
    );

//Запросы для поставщиков-изготовителей

    router.get("/manufacturer:id",async (req,res) => {
        let sql = `SELECT * FROM manufacturer WHERE id = ${req.params.id} LIMIT 1`;
        connectDB.query(sql, (err, result) => {
            if(err) {
               res.status(500).send
               throw err; 
            }
            else res.json(result);
        })
    });
    
    router.get("/manufacturer", async (req,res) => {
        let sql = "SELECT * FROM manufacturer";
        connectDB.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        })
    });
    
    
    
    router.post(
        "/manufacturer",
        [
            check("name", "Укажите название компании").not().isEmpty(),
            check("country", "Укажите страну").not().isEmpty()
        ],
    
        async (req, res) => {
    
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
    
            const {name, country} = req.body;
            let data = {name, country};
            let sql = "INSERT INTO manufacturer SET ?";
    
            connectDB.query(sql, data, (err, result) => {
                if (err) {
                    res.status(500).send("Errors server");
                    throw err;
                } else res.send("Компания добавлена");
            })
    
        }
    );
        router.put(
            "/manufacturer",
            [
                check("name", "Укажите название компании").not().isEmpty(),
                check("country", "Укажите страну").not().isEmpty()
            ],
    
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array()});
                }
                
                const {id, name, country} = req.body;
                let sql = `UPDATE manufacturer SET name = "${name}", country = "${country}" WHERE id = "${id}"`
                
                connectDB.query(sql, (err) => {
                    if (err) {
                        res.status(500).send("Ошибка сервера");
                        throw err;
                    } else res.send("Компания обновлена");
                });		
            }
        );
        
        router.delete(
            "/manufacturer/:id",
            [check("id", "Вы не выбрали компанию")],
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                
                let id = req.params.id;
                let sql = `DELETE FROM manufacturer WHERE id=${id}`;
                
                await connectDB.query(sql, (err) => {
                    if (err) {
                        res.status(500).send("Ошибка сервера");
                        throw err;
                    } else res.send("Компания удалена");
                });
            }
        );
    
//Запросы для категорий

    router.get("/categories:id",async (req,res) => {
        let sql = `SELECT * FROM categories WHERE id = ${req.params.id} LIMIT 1`;
        connectDB.query(sql, (err, result) => {
            if(err) {
               res.status(500).send
               throw err; 
            }
            else res.json(result);
        })
    });
    
    router.get("/categories", async (req,res) => {
        let sql = "SELECT * FROM categories";
        connectDB.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        })
    });
    
    
    
    router.post(
        "/categories",
        [
            check("name", "Укажите название категории").not().isEmpty()
        ],
    
        async (req, res) => {
    
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
    
            const {name} = req.body;
            let data = {name};
            let sql = "INSERT INTO categories SET ?";
    
            connectDB.query(sql, data, (err, result) => {
                if (err) {
                    res.status(500).send("Errors server");
                    throw err;
                } else res.send("Категория добавлена");
            })
    
        }
    );
        router.put(
            "/categories",
            [
                check("name", "Укажите название категории").not().isEmpty()
            ],
    
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array()});
                }
                
                const {id, name} = req.body;
                let sql = `UPDATE categories SET name = "${name}" WHERE id = "${id}"`
                
                connectDB.query(sql, (err) => {
                    if (err) {
                        res.status(500).send("Ошибка сервера");
                        throw err;
                    } else res.send("Категория обновлена");
                });		
            }
        );
        
        router.delete(
            "/categories/:id",
            [check("id", "Вы не выбрали категорию")],
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                
                let id = req.params.id;
                let sql = `DELETE FROM categories WHERE id=${id}`;
                
                await connectDB.query(sql, (err) => {
                    if (err) {
                        res.status(500).send("Ошибка сервера");
                        throw err;
                    } else res.send("Категория удалена");
                });
            }
        );

//Запросы для товаров

router.get("/products",async (req,res) => {
    const {name} = req.body;
    let sql = `SELECT * FROM product WHERE name = "${name}" LIMIT 1`;
    connectDB.query(sql, (err, result) => {
        if(err) {
           res.status(500).send
           throw err; 
        }
        else res.json(result);
    })
});

router.get("/product", async (req,res) => {
    let sql = "SELECT * FROM product";
    connectDB.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});



router.post(
    "/product",
    [
        check("name", "Укажите название продукта").not().isEmpty(),
        check("count", "Укажите количество продукта").not().isEmpty(),
        check("price", "Укажите цену продукта").not().isEmpty(),
        check("manufactured_time", "Укажите дату изготовления").not().isEmpty(),
        check("expiration_date", "Укажите срок годности").not().isEmpty(),
        check("manufacturer_id", "Укажите изготовителя").not().isEmpty(),
        check("categories_id", "Укажите категорию").not().isEmpty()
    ],

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {name, count, price, manufactured_time, expiration_date, manufacturer_id, categories_id} = req.body;
        let data = {name, count, price, manufactured_time, expiration_date, manufacturer_id, categories_id};
        let sql = "INSERT INTO product SET ?";

        connectDB.query(sql, data, (err, result) => {
            if (err) {
                res.status(500).send("Errors server");
                throw err;
            } else res.send("Продукт добавлен");
        })

    }
);
    router.put(
        "/product/:id",
        [
            check("name", "Укажите название продукта").not().isEmpty(),
            check("count", "Укажите количество продукта").not().isEmpty(),
            check("price", "Укажите цену продукта").not().isEmpty(),
            check("manufactured_time", "Укажите дату изготовления").not().isEmpty(),
            check("expiration_date", "Укажите срок годности").not().isEmpty(),
            check("manufacturer_id", "Укажите изготовителя").not().isEmpty(),
            check("categories_id", "Укажите категорию").not().isEmpty()
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
            const { name, count, price, manufactured_time, expiration_date, manufacturer_id, categories_id} = req.body;
            let id = req.params.id;
            let sql = `UPDATE product SET name = "${name}", count = "${count}", price = "${price}", manufactured_time ="${manufactured_time}", expiration_date = "${expiration_date}", manufacturer_id = "${manufacturer_id}", categories_id = "${categories_id}"  WHERE id = "${id}"`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Товар обновлен");
            });		
        }
    );

    router.put(
        "/productOrder/:id",
        [
            check("count", "Укажите количество продукта").not().isEmpty(),
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
           
            let id = req.params.id;
            const {count} = req.body;
            let sql = `UPDATE product SET count = count -"${count}" WHERE id = "${id}"`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Товар обновлен");
            });		
        }
    );
    
    router.delete(
        "/product/:id",
        [check("id", "Вы не выбрали товар")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM product WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Товар удален");
            });
        }
    );
    
//Запросы для заказов\продажи

router.get("/order:id",async (req,res) => {
    let sql = `SELECT * FROM` + "`order`" + `WHERE id = ${req.params.id} LIMIT 1`;
    connectDB.query(sql, (err, result) => {
        if(err) {
           res.status(500).send
           throw err; 
        }
        else res.json(result);
    })
});

router.get("/order", async (req,res) => {
    let sql = "SELECT * FROM `order`";
    connectDB.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});



router.post(
    "/order",
    [
        check("count", "Укажите количество продукта").not().isEmpty(),
        check("seller_id", "Укажите продавца").not().isEmpty(),
    ],

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {name, price, count,  seller_id, product_id} = req.body;
        let data = {name, price, count, seller_id, product_id};
        let sql = `INSERT INTO` + "`order` (name, price, count, datetime, seller_id, product_id) " + `VALUES ( "${name}", "${price * count}", "${count}", NOW(), "${seller_id}", "${product_id}")`;

        connectDB.query(sql, data, (err, result) => {
            if (err) {
                res.status(500).send("Errors server");
                throw err;
            } else res.send("Продажа оформлена");
        })

    }
);
    router.put(
        "/order",
        [
            check("count", "Укажите количество продукта").not().isEmpty(),
            check("datetime", "Укажите дату покупки").not().isEmpty(),
            check("seller_id", "Укажите продавца").not().isEmpty(),
            check("product_id", "Укажите продукт").not().isEmpty()
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
            const {id, count, datetime, seller_id, product_id} = req.body;
            let sql = `UPDATE ` + "`order`" +` SET count = "${count}", datetime = "${datetime}", seller_id = "${seller_id}", product_id ="${product_id}" WHERE id = "${id}"`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Продажа обновлена");
            });		
        }
    );
    
    router.delete(
        "/order/:id",
        [check("id", "Вы не выбрали продажу")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM` +"`order`" + ` WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Продажа удалена");
            });
        }
    );

    //post dolznost'

    router.get("/post:id",async (req,res) => {
        let sql = `SELECT * FROM post WHERE id = ${req.params.id} LIMIT 1`;
        connectDB.query(sql, (err, result) => {
            if(err) {
               res.status(500).send
               throw err; 
            }
            else res.json(result);
        })
    });
    
    router.get("/post", async (req,res) => {
        let sql = "SELECT * FROM post";
        connectDB.query(sql, (err, result) => {
            if(err) throw err;
            res.json(result);
        })
    });
    
    
    
    router.post(
        "/post",
        [
            check("title", "Укажите название должности").not().isEmpty(),
            check("salary", "Укажите ЗП").not().isEmpty()
        ],
    
        async (req, res) => {
    
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({errors: errors.array()});
            }
    
            const {title, salary} = req
            .body;
            let data = {title, salary};
            let sql = "INSERT INTO post SET ?";
    
            connectDB.query(sql, data, (err, result) => {
                if (err) {
                    res.status(500).send("Errors server");
                    throw err;
                } else res.send("должность добавлена");
            })
    
        }
    );
        router.put(
            "/post",
            [
                check("title", "Укажите название должности").not().isEmpty(),
                check("salary", "Укажите ЗП").not().isEmpty()
            ],
    
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array()});
                }
                
                const {id, name, country} = req.body;
                let sql = `UPDATE post SET title = "${title}", salary = "${salary}" WHERE id = "${id}"`
                
                connectDB.query(sql, (err) => {
                    if (err) {
                        res.status(500).send("Ошибка сервера");
                        throw err;
                    } else res.send("ZP обновлена");
                });		
            }
        );
        
        router.delete(
            "/post/:id",
            [check("id", "Вы не выбрали dolznost'")],
            async (req, res) => {
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({ errors: errors.array() });
                }
                
                let id = req.params.id;
                let sql = `DELETE FROM post WHERE id=${id}`;
                
                await connectDB.query(sql, (err) => {
                    if (err) {
                        res.status(500).send("Ошибка сервера");
                        throw err;
                    } else res.send("post удален");
                });
            }
        );

        //departament

        router.get("/departament:id",async (req,res) => {
            let sql = `SELECT * FROM departament WHERE id = ${req.params.id} LIMIT 1`;
            connectDB.query(sql, (err, result) => {
                if(err) {
                   res.status(500).send
                   throw err; 
                }
                else res.json(result);
            })
        });
        
        router.get("/departament", async (req,res) => {
            let sql = "SELECT * FROM departament";
            connectDB.query(sql, (err, result) => {
                if(err) throw err;
                res.json(result);
            })
        });
        
        
        
        router.post(
            "/departament",
            [
                check("title", "Укажите название отдел").not().isEmpty(),
                check("counter", "Укажите количество прилавков").not().isEmpty(),
                check("cooperator", "Укажите количество сотрудников").not().isEmpty(),
                check("hall", "Укажите номер зала ").not().isEmpty()
            ],
        
            async (req, res) => {
        
                const errors = validationResult(req);
                if (!errors.isEmpty()) {
                    return res.status(400).json({errors: errors.array()});
                }
        
                const {title, counter, cooperator, hall} = req
                .body;
                let data = {title, counter, cooperator, hall};
                let sql = "INSERT INTO departament SET ?";
        
                connectDB.query(sql, data, (err, result) => {
                    if (err) {
                        res.status(500).send("Errors server");
                        throw err;
                    } else res.send("отдел добавлен");
                })
        
            }
        );
            router.put(
                "/departament",
                [
                    check("title", "Укажите название отдел").not().isEmpty(),
                    check("counter", "Укажите количество прилавков").not().isEmpty(),
                    check("cooperator", "Укажите количество сотрудников").not().isEmpty(),
                    check("hall", "Укажите номер зала ").not().isEmpty()
                ],
        
                async (req, res) => {
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array()});
                    }
                    
                    const {id, title, counter, cooperator, hall} = req.body;
                    let sql = `UPDATE departament SET title = "${title}", counter = "${counter}", cooperator = "${cooperator}", hall = "${hall}", WHERE id = "${id}"`
                    
                    connectDB.query(sql, (err) => {
                        if (err) {
                            res.status(500).send("Ошибка сервера");
                            throw err;
                        } else res.send("Отдел обновлен");
                    });		
                }
            );
            
            router.delete(
                "/departament/:id",
                [check("id", "Вы не выбрали отдел'")],
                async (req, res) => {
                    const errors = validationResult(req);
                    if (!errors.isEmpty()) {
                        return res.status(400).json({ errors: errors.array() });
                    }
                    
                    let id = req.params.id;
                    let sql = `DELETE FROM departament WHERE id=${id}`;
                    
                    await connectDB.query(sql, (err) => {
                        if (err) {
                            res.status(500).send("Ошибка сервера");
                            throw err;
                        } else res.send("Отдел удален");
                    });
                }
            );

module.exports = router;
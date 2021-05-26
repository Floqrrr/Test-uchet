const express = require('express');
const { check, validationResult } = require('express-validator');
const router = express.Router();
const connectDB = require('../config/database');

//Запросы для процессоров
router.get("/cpu:id",async (req,res) => {
    let sql = `SELECT * FROM cpu WHERE id = ${req.params.id} LIMIT 1`;
    connectDB.query(sql, (err, result) => {
        if(err) {
           res.status(500).send
           throw err; 
        }
        else res.json(result);
    })
});

router.get("/cpu", async (req,res) => {
    let sql = "SELECT * FROM cpu";
    connectDB.query(sql, (err, result) => {
        if(err) throw err;
        res.json(result);
    })
});

router.post(
    "/cpu",
    [
        check("brend", "Укажите бренд").not().isEmpty(),
        check("price", "Укажите цену").not().isEmpty(),
        check("model", "Укажите модель").not().isEmpty(),
        check("socket", "Укажите сокет").not().isEmpty(),
        check("num_of_core", "Укажите количество ядер").not().isEmpty(),
        check("num_of_threads", "Укажите количество потоков").not().isEmpty(),
        check("frequency", "Укажите частоту").not().notEmpty(),
    ],

    async (req, res) => {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()});
        }

        const {brend, price, model, socket, num_of_core, num_of_threads, frequency} = req.body;
        let data = {brend, price, model, socket, num_of_core, num_of_threads, frequency};
        let sql = "INSERT INTO cpu SET ?";

        connectDB.query(sql, data, (err, result) => {
            if (err) {
                res.status(500).send("Errors server");
                throw err;
            } else res.send("Задача добавлена");
        })

    }
);
    router.put(
        "/cpu",
        [
            check("id", "Вы не выбрали процессор"),
            check("brend", "Укажите бренд"),
            check("price", "Укажите цену"),
            check("model", "Укажите модель"),
            check("socket", "Укажите сокет"),
            check("num_of_core", "Укажите количество ядер"),
            check("num_of_threads", "Укажите количество потоков"),
            check("frequency", "Укажите частоту")
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
            const {id, brend, price, model, socket, num_of_core, num_of_threads, frequency} = req.body;
            let sql = `UPDATE cpu SET brend = "${brend}", price = "${price}", model = "${model}", socket = "${socket}", num_of_core = "${num_of_core}", num_of_threads = "${num_of_threads}", frequency = "${frequency}" WHERE id = "${id}"`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Процессор обновлен");
            });		
        }
    );
    
    router.delete(
        "/cpu/:id",
        [check("id", "Вы не выбрали процессор")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM cpu WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Процессор удален");
            });
        }
    );
    
    //
    //Запросы для видеокарт 
    //
    
    router.get(
        "/gpu",
        async (req, res) => {
            let sql = "SELECT * FROM gpu";
            connectDB.query(sql, (err, result) => {
                if(err) throw err;
                res.json(result);
            });
        }
    );
    
    router.post(
        "/gpu",
        [
            check("brend", "Укажите бренд"),
            check("price", "Укажите цену"),
            check("model", "Укажите модель"),
            check("memory_size", "Укажите размер памяти"),
            check("memory_type", "Укажите тип памяти"),
            check("frequency", "Укажите частоту")
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            const {brend, price, model, memory_size, memory_type, frequency} = req.body;
            let data = {brend, price, model, memory_size, memory_type, frequency};
            let sql = "INSERT INTO gpu SET ?";
            
            connectDB.query(sql, data, (err, result) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Видеокарта добавлена");
            });
        }
    );
    
    router.put(
        "/gpu",
        [
            check("id", "Вы не выбрали видеокарту"),
            check("brend", "Укажите бренд"),
            check("price", "Укажите цену"),
            check("model", "Укажите модель"),
            check("memory_size", "Укажите размер памяти"),
            check("memory_type", "Укажите тип памяти"),
            check("frequency", "Укажите частоту")
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
            const {id, brend, price, model, socket, memory_size, memory_type, frequency} = req.body;
            let sql = `UPDATE gpu SET brend = "${brend}", price = "${price}", model = "${model}", memory_size = "${memory_size}", memory_type = "${memory_type}", frequency = "${frequency} "  WHERE id = "${id}"`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Видеокарта обновлена");
            });		
        }
    );
    
    router.delete(
        "/gpu/:id",
        [check("id", "Вы не выбрали видеокарту")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM gpu WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Видеокарта удалена");
            });
        }
    );
    
    //
    //Запросы для hdd
    //
    
    router.get(
        "/hdd",
        async (req, res) => {
            let sql = "SELECT * FROM hdd";
            connectDB.query(sql, (err, result) => {
                if(err) throw err;
                res.json(result);
            });
        }
    );
    
    router.post(
        "/hdd",
        [
            check("brend", "Укажите бренд"),
            check("price", "Укажите цену"),
            check("model", "Укажите модель"),
            check("memory_size", "Укажите размер памяти"),
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            const {brend, price, model, memory_size} = req.body;
            let data = {brend, price, model, memory_size};
            let sql = "INSERT INTO hdd SET ?";
            
            connectDB.query(sql, data, (err, result) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Жесткий диск добавлен");
            });
        }
    );
    
    router.put(
        "/hdd",
        [
            check("id", "Вы не выбрали жесткий диск"),
            check("brend", "Укажите бренд"),
            check("price", "Укажите цену"),
            check("model", "Укажите модель"),
            check("memory_size", "Укажите размер памяти")
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
            const {id, brend, price, model, memory_size} = req.body;
            let sql = `UPDATE hdd SET brend = "${brend}", price = "${price}", model = "${model}", memory_size = "${memory_size}"  WHERE id = "${id}`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Жесткий диск обновлен");
            });		
        }
    );
    
    router.delete(
        "/hdd/:id",
        [check("id", "Вы не выбрали жесткий диск")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM hdd WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Жесткий диск удален");
            });
        }
    );
    
    //
    //Запросы для материнских плат
    //
    
    router.get(
        "/motherboard",
        async (req, res) => {
            let sql = "SELECT * FROM mother_board";
            connectDB.query(sql, (err, result) => {
                if(err) throw err;
                res.json(result);
            });
        }
    );
    
    router.post(
        "/motherboard",
        [
            check("brend", "Укажите бренд"),
            check("price", "Укажите цену"),
            check("model", "Укажите модель"),
            check("socket", "Укажите сокет"),
            check("chipset", "Укажите чипсет"),
            check("memory_type", "Укажите тип памяти")
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            const {brend, price, model, socket, chipset, memory_type} = req.body;
            let data = {brend, price, model, socket, chipset, memory_type};
            let sql = "INSERT INTO mother_board SET ?";
            
            connectDB.query(sql, data, (err, result) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Материнская плата добавлена");
            });
        }
    );
    
    router.put(
        "/motherboard",
        [
            check("id", "Вы не выбрали материнскую плату"),
            check("brend", "Укажите бренд"),
            check("price", "Укажите цену"),
            check("model", "Укажите модель"),
            check("socket", "Укажите сокет"),
            check("chipset", "Укажите чипсет"),
            check("memory_type", "Укажите тип памяти")
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
            const {id, brend, price, model, socket, chipset, memory_type} = req.body;
            let sql = `UPDATE mother_board SET brend = "${brend}", price = "${price}", model = "${model}", socket = "${socket}", chipset = "${chipset}", memory_type = "${memory_type}"  WHERE id = "${id}"`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Материнская плата обновлена");
            });		
        }
    );
    
    router.delete(
        "/motherboard/:id",
        [check("id", "Вы не выбрали материнскую плату")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM mother_board WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Материнская плата удалена");
            });
        }
    );
    
    //
    // Запросы блоков питания
    //
    
    router.get(
        "/power",
        async (req, res) => {
            let sql = "SELECT * FROM power_sup";
            connectDB.query(sql, (err, result) => {
                if(err) throw err;
                res.json(result);
            });
        }
    );
    
    router.post(
        "/power",
        [
            check("brend", "Укажите бренд"),
            check("price", "Укажите цену"),
            check("model", "Укажите модель"),
            check("power", "Укажите мощность"),
            check("form_factor", "Укажите форм фактор")
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            const {brend, price, model, power, form_factor} = req.body;
            let data = {brend, price, model, power, form_factor};
            let sql = "INSERT INTO power_sup SET ?";
            
            connectDB.query(sql, data, (err, result) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Блок питания добавлен");
            });
        }
    );
    
    router.put(
        "/power",
        [
            check("id", "Вы не выбрали блок питания"),
            check("brend", "Укажите бренд"),
            check("price", "Укажите цену"),
            check("model", "Укажите модель"),
            check("power", "Укажите мощность"),
            check("form_factor", "Укажите форм фактор")
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
            const {id, brend, price, model, power, form_factor} = req.body;
            let sql = `UPDATE power_sup SET brend = "${brend}", price = "${price}", model = "${model}", power = "${power}", form_factor = "${form_factor}"  WHERE id = "${id}"`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Блок питания обновлен");
            });		
        }
    );
    
    router.delete(
        "/power/:id",
        [check("id", "Вы не выбрали блок питания")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM power_sup WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Блок питания удален");
            });
        }
    );
    
    //
    // Запросы для Оперативной памяти
    //
    
    router.get(
        "/Ram",
        async (req, res) => {
            let sql = "SELECT * FROM ram";
            connectDB.query(sql, (err, result) => {
                if(err) throw err;
                res.json(result);
            });
        }
    );
    
    router.post(
        "/Ram",
        [
            check("brend", "Укажите бренд"),
            check("price", "Укажите цену"),
            check("model", "Укажите модель"),
            check("memory_size", "Укажите размер памяти"),
            check("memory_type", "Укажите тип памяти")
            
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            const {brend, price, model, memory_size, memory_type} = req.body;
            let data = {brend, price, model, memory_size, memory_type};
            let sql = "INSERT INTO ram SET ?";
            
            connectDB.query(sql, data, (err, result) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Оперативная память добавлена");
            });
        }
    );
    
    router.put(
        "/Ram",
        [
            check("id", "Вы не выбрали оператинвую память"),
            check("brend", "Укажите бренд"),
            check("price", "Укажите цену"),
            check("model", "Укажите модель"),
            check("memory_size", "Укажите размер памяти"),
            check("memory_type", "Укажите тип памяти")
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
            const {id, brend, price, model,  memory_size, memory_type} = req.body;
            let sql = `UPDATE ram SET brend = "${brend}", price = "${price}", model = "${model}", memory_size = "${memory_size}", memory_type = "${memory_type}"  WHERE id = "${id}"`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Оперативная память обновлена");
            });		
        }
    );
    
    router.delete(
        "/Ram/:id",
        [check("id", "Вы не выбрали оперативную память")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM ram WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Оперативная память удалена");
            });
        }
    );
    
    //
    //Запросы ролей
    //
    
    router.get(
        "/",
        async (req, res) => {
            let sql = "SELECT * FROM role";
            connectDB.query(sql, (err, result) => {
                if(err) throw err;
                res.json(result);
            });
        }
    );
    
    router.post(
        "/",
        [
            check("name", "Укажите название роли")
            
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            const {name} = req.body;
            let data = {name};
            let sql = "INSERT INTO role SET ?";
            
            connectDB.query(sql, data, (err, result) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Роль добавлена");
            });
        }
    );
    
    router.put(
        "/",
        [
            check("id", "Вы не выбрали роль"),
            check("name", "Укажите название роли"),
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
            const {id, name} = req.body;
            let sql = `UPDATE ram SET name = "${name}"`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Роль обновлена");
            });		
        }
    );
    
    router.delete(
        "/",
        [check("id", "Вы не выбрали роль")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM role WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Роль удалена");
            });
        }
    );
    
    //
    //Запросы пользователей
    //
    
    router.get(
        "/",
        async (req, res) => {
            let sql = "SELECT * FROM users";
            connectDB.query(sql, (err, result) => {
                if(err) throw err;
                res.json(result);
            });
        }
    );
    
    router.post(
        "/",
        [
        
            check("login", "Укажите логин"),
            check("password", "Укажите пароль"),
            check("id_role", "Укажите роль"),
            check("id_components", "Укажите сборку")
            
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            const {login, password, id_role, id_components} = req.body;
            let data = {login, password, id_role, id_components};
            let sql = "INSERT INTO users SET ?";
            
            connectDB.query(sql, data, (err, result) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Пользователь добавлен");
            });
        }
    );
    
    router.put(
        "/",
        [
            check("id", "Вы не выбрали пользователя"),
            check("login", "Укажите логин"),
            check("password", "Укажите пароль"),
            check("id_role", "Укажите роль"),
            check("id_components", "Укажите сборку")
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            
            const {id, login, password, id_role, id_components} = req.body;
            let sql = `UPDATE ram SET login = "${login}", password = "${password}", id_role = "${id_role}", id_components = "${id_components}"  WHERE id = "${id}`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Пользователь обновлен");
            });		
        }
    );
    
    router.delete(
        "/",
        [check("id", "Вы не выбрали пользователя")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM users WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Пользователь удален");
            });
        }
    );
    
    //
    //Запрос компонентов или сборки
    //
    
    router.get(
        "/components",
        async (req, res) => {
            let sql = "SELECT * FROM components";
            connectDB.query(sql, (err, result) => {
                if(err) throw err;
                res.json(result);
            });
        }
    );
    router.get(
        "/components/:id",
        async (req, res) => {
            let sql = `SELECT * FROM cpu WHERE id = ${req.params.id} LIMIT 1`;
            connectDB.query(sql, (err, result) => {
                if(err) {
                   res.status(500).send
                   throw err; 
                }
                else res.json(result);
            })
    }
    );
    
    router.post(
        "/components",
        [
        
            check("name", "Укажите название сборки").not().isEmpty(),
            check("id_cpu", "Укажите процессор").not().isEmpty(),
            check("id_gpu", "Укажите видеокарту"),
            check("id_motherboard", "Укажите материнскую плату").not().isEmpty(),
            check("id_ram", "Укажите оперативную память").not().isEmpty(),
            check("id_power_sup", "Укажите блок питания").not().isEmpty(),
            check("id_hdd", "Укажите жесткий диск").not().isEmpty()
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            const {name, id_cpu, id_gpu, id_motherboard, id_ram, id_power_sup, id_hdd} = req.body;
            let data = {name, id_cpu, id_gpu, id_motherboard, id_ram, id_power_sup, id_hdd};
            let sql = "INSERT INTO components SET ?";
            
            connectDB.query(sql, data, (err, result) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Сборка добавлена");
            });
        }
    );
    
    router.put(
        "/components/:id",
        [
            check("id", "Укажите id сборки"),
            check("name", "Укажите название сборки").not().isEmpty(),
            check("id_cpu", "Укажите процессор").not().isEmpty(),
            check("id_gpu", "Укажите видеокарту").not().isEmpty(),
            check("id_motherboard", "Укажите материнскую плату").not().isEmpty(),
            check("id_ram", "Укажите оперативную память").not().isEmpty(),
            check("id_power_sup", "Укажите блок питания").not().isEmpty(),
            check("id_hdd", "Укажите жесткий диск").not().isEmpty()
        ],

        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array()});
            }
            let id = req.params.id;
            const {name, id_cpu, id_gpu, id_motherboard, id_ram, id_power_sup, id_hdd} = req.body;
            let sql = `UPDATE components SET name = "${name}", id_cpu = "${id_cpu}", id_gpu = "${id_gpu}", id_motherboard = "${id_motherboard}", id_ram = "${id_ram}", id_power_sup = "${id_power_sup}", id_hdd = "${id_hdd}"  WHERE id = "${id}"`
            
            connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else console.log("Obnova"), res.send("Сборка обновлена");
            });		
        }
    );
    
    router.delete(
        "/components/:id",
        [check("id", "Вы не выбрали сборку")],
        async (req, res) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: errors.array() });
            }
            
            let id = req.params.id;
            let sql = `DELETE FROM components WHERE id=${id}`;
            
            await connectDB.query(sql, (err) => {
                if (err) {
                    res.status(500).send("Ошибка сервера");
                    throw err;
                } else res.send("Сборка удаленa");
            });
        }
    );
    
module.exports = router;
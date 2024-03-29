<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css"
        integrity="sha384-/Y6pD6FV/Vv2HJnA6t+vslU6fwYXjCFtcEpHbNJ0lyAFsXTsjBbfaDjzALeQsN6M" crossorigin="anonymous">
    <title>Expense Tracker</title>
</head>

<body>
    <header id="main-header" class="bg-success text-white p-4 mb-3">
        <div class="container">
            <div class="col-md-6"></div>
            <h1 id="header-title">Expence Tracker <span style="display:none">123</span></h1>
        </div>
    </header>

    <body>
        <section class="container">
            <form id='my-form'>
                <div>
                    <label for="expense">Choose expense Amount:</label>
                    <input type="number" name="expense" id="expense">
                </div>
                </div>
                <label for="description">Choose description:</label>
                <input type="text" name="description" id="description">
                </div>
                <div>
                    <label for="category">Choose a category:</label>
                    <select name="category" id="category">
                        <option value="">select any one</option>
                        <option value="fuel">fuel</option>
                        <option value="food">food</option>
                        <option value="electricity">electricity</option>
                        <option value="movie">movie</option>
                    </select>
                </div>
                <input type="submit" name="submit" id="submit" value="Add Expense">
            </form>
            <div>
                <ul id="showlist"></ul>
            </div>
        </section>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js"></script>
        <script src="main.js"></script>
    </body>

</html>

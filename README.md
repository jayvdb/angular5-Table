# Angular5Table

### A simple way to display data in a table with angular !!


## Configuration step 

* Insert in your index.html the cdn link of bootstrap 4
* Import in your module the angular5TableModule.
* Insert the the angular5Table selector tag when you need insert him
* Configure the options data

## CDN Link of bootstrap 4

This component require the css link and the font-awesome link of bootstrap 4. You can import this link in your index.html

Click [Here](https://getbootstrap.com/docs/4.1/getting-started/introduction/) for visit the bootstrap site and copy the cdn file.


### bootstrap css and font-awesome link

```html
<link rel="stylesheet"
href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
```

### import module

```javascript
import {Angular5TableModule} from './Angular5-Table/angular5-table.module';
```

### selector tag 

```html
<angular5Table 
    [dataTable]="data"
    [dataColumn]="column"
    [itemsForPage]="10"
    [options]="options"
    [pagination]="true"
    [filter]="true"
    [sortable]="true"
    [functionDefault]="yourFunction">
</angular5Table>
```

<table style="text-align: center; width: 800px; border: 1px solid">
    <tr style="background-color: #e1e1e1">
        <th>Attribute</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>dataTable</td>
        <td>Specific the data to show in the table</td>
    </tr>
    <tr>
        <td>dataColumn</td>
        <td>Specific the column header for the table</td>
    </tr>
    <tr>
        <td>itemsForPage</td>
        <td>The number of items to show on the table</td>
    </tr>
    <tr>
        <td>options</td>
        <td>This parameter allow to pass another type of configuration with more parameter</td>
    </tr>
    <tr>
        <td>pagination</td>
        <td>If set true show the pagination, if set false not</td>
    </tr>
    <tr>
        <td>sortable</td>
        <td>To set or not the sortable column asc/desc</td>
    </tr>
    <tr>
        <td>functionDefault</td>
        <td>This is a default function with retun the operation with the button click event.</td>
    </tr>
</table>

The option attribute is an array of object. The object contains this key:

* Name, that specific the name of the element
* type, that specific the type of the element
* class, for assign a specific style
* url, for pass the icon url

``` javascript
this.options = [
      {name: 'download', type: 'img', class: 'img-table', url: 'test.png'},
      {name: 'edit', type: 'img', class: 'btn-table', url: '../assets/test.png'},
      {name: 'delete', type: 'img', class: 'btn-table', url: '../assets/test.png'},
      {name: 'button', type: 'button', class: 'form-control', url: ''},
    ];
```

The function default attribute,  is a function that manage the click event of a icons or button in a table.

#### Example
When you click edit icon, this funcion return 4 parameter.
```javascript
 functionDefault(index: number, type: any, item: any, option: any){
   
  }
```

* index, is a row index
* type, is a type of a operation (edit,download,delete)
* Item, is a row data item
* option, return the option of a row click

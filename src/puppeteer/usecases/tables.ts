import { GeneratePDF } from "../main";

const header1 = `
<p>
Verlag Guido Schmidt<br>
Hohestrasse 130<br>
CH-4104 Oberwil BL<br>
T  +41 61 721 99 02<br>
F  +41 61 721 99 05<br>
M  info@bmm-magazin.de<br>
W  www.bmm-magazin.de
</p>
`;

const header2 = `
<p>
RM Wellness GmbH<br>
Herr Roland Mader<br>
Linzer Straße 513002<br>
Purkersdorf<br>
Österreich
</p>`;

const content = `
<h1>HTML Table Example</h1>
<table>
   <thead>
      <tr>
         <th>Product</th>
         <th>Price</th>
         <th>Quantity</th>
      </tr>
   </thead>
   <tbody>
      <tr>
         <td>Apple</td>
         <td>$1.99</td>
         <td>5</td>
      </tr>
      <tr>
         <td>Orange</td>
         <td>$0.99</td>
         <td>8</td>
      </tr>
      <tr>
         <td>Banana</td>
         <td>$0.49</td>
         <td>10</td>
      </tr>
      <tr>
         <td>Apple</td>
         <td>$1.99</td>
         <td>5</td>
      </tr>
      <tr>
         <td>Orange</td>
         <td>$0.99</td>
         <td>8</td>
      </tr>
      <tr>
         <td>Banana</td>
         <td>$0.49</td>
         <td>10</td>
      </tr>
      <tr>
         <td>Apple</td>
         <td>$1.99</td>
         <td>5</td>
      </tr>
      <tr>
         <td>Orange</td>
         <td>$0.99</td>
         <td>8</td>
      </tr>
      <tr>
         <td>Banana</td>
         <td>$0.49</td>
         <td>10</td>
      </tr>
      <tr>
         <td>Apple</td>
         <td>$1.99</td>
         <td>5</td>
      </tr>
      <tr>
         <td>Orange</td>
         <td>$0.99</td>
         <td>8</td>
      </tr>
      <tr>
         <td>Banana</td>
         <td>$0.49</td>
         <td>10</td>
      </tr>
      <tr>
         <td>Apple</td>
         <td>$1.99</td>
         <td>5</td>
      </tr>
      <tr>
         <td>Orange</td>
         <td>$0.99</td>
         <td>8</td>
      </tr>
      <tr>
         <td>asdf</td>
         <td>$0.49</td>
         <td>10</td>
      </tr>
      <tr>
         <td>Apple</td>
         <td>$1.99</td>
         <td>5</td>
      </tr>
      <tr>
         <td>Orange</td>
         <td>$0.99</td>
         <td>8</td>
      </tr>
      <tr>
         <td>asdf</td>
         <td>$0.49</td>
         <td>10</td>
      </tr>
      <tr>
         <td>Apple</td>
         <td>$1.99</td>
         <td>5</td>
      </tr>
      <tr>
         <td>Orange</td>
         <td>$0.99</td>
         <td>8</td>
      </tr>
      <tr>
         <td>asdf</td>
         <td>$0.49</td>
         <td>10</td>
      </tr>
      <tr>
         <td>Apple</td>
         <td>$1.99</td>
         <td>5</td>
      </tr>
      <tr>
         <td>Orange</td>
         <td>$0.99</td>
         <td>8</td>
      </tr>
      <tr>
         <td>asdf</td>
         <td>$0.49</td>
         <td>10</td>
      </tr>
      <tr>
         <td>Apple</td>
         <td>$1.99</td>
         <td>5</td>
      </tr>
      <tr>
         <td>Orange</td>
         <td>$0.99</td>
         <td>8</td>
      </tr>
      <tr>
         <td>asdf</td>
         <td>$0.49</td>
         <td>10</td>
      </tr>
      <tr>
         <td>Apple</td>
         <td>$1.99</td>
         <td>5</td>
      </tr>
      <tr>
         <td>Orange</td>
         <td>$0.99</td>
         <td>8</td>
      </tr>
      <tr>
         <td>asdf</td>
         <td>$0.49</td>
         <td>10</td>
      </tr>
   </tbody>
</table>
`;

const footer = `
© 2023 Arbitrary Company. All rights reserved.
`;

const styles = `
table {
    width: 100%;
    border-collapse: collapse;
    font-family: Arial, sans-serif;
  }

  th, td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
    font-weight: bold;
  }

  tr:nth-child(even) {
    background-color: #f9f9f9;
  }

  tr:hover {
    background-color: #f5f5f5;
  }`;

const data: any = {
  header1,
  header2,
  content,
  footer,
  styles,
};

GeneratePDF(data, "tables");

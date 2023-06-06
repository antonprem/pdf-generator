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
<img
src="https://johnstillk8.scusd.edu/sites/main/files/main-images/camera_lense_0.jpeg" width="500px"
/>
`;

const footer = `
© 2023 Arbitrary Company. All rights reserved.
`;

const styles = ``;

const data: any = {
  header1,
  header2,
  content,
  footer,
  styles,
};

GeneratePDF(data, "image");

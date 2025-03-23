# Duboisviz

Duboisviz is a recreation of W.E.B. Du Bois' historic data visualization (Plate 51) showing the proportion of free and enslaved Black people in America from 1790 to 1870. This modern implementation uses D3.js to faithfully reproduce the powerful visual storytelling that characterized Du Bois' innovative data portraits.

## About W.E.B. Du Bois and His Data Visualizations

W.E.B. Du Bois (1868-1963) was a prominent sociologist, historian, civil rights activist, and the first African American to earn a doctorate from Harvard University. In 1900, Du Bois led a team that created a series of groundbreaking data visualizations for the "Exhibit of American Negroes" at the Paris Exposition. These visualizations, known as "data portraits," used innovative design techniques to communicate statistical information about African American life in the post-Civil War era.

These visualizations were revolutionary not only for their content but also for their design aesthetic, which predated many modern data visualization techniques by decades. Du Bois and his team created visually striking charts and graphs that effectively communicated complex sociological data in a way that was both accessible and powerful.

## About This Visualization (Plate 51)

This project recreates "Plate 51" from Du Bois' collection, titled "PROPORTION OF FREEMEN AND SLAVES AMONG AMERICAN NEGROES." The visualization presents data on the percentages of enslaved vs. free Black Americans from 1790 to 1870, showing the dramatic change after emancipation.

Key features of the original visualization:
- A striking green background with a black area chart
- Clear temporal data showing the proportion of enslaved people (consistently around 85-90%) until the dramatic shift to 0% in 1870
- Bilingual labeling (English and French) reflecting the international audience at the Paris Exposition

## Technical Implementation

This modern recreation uses:

- **D3.js (v6)**: For data visualization and manipulation
- **Vite**: As the build tool and development server
- **Tailwind CSS**: For styling the page layout
- **CSV Data Storage**: Local data file containing the historical percentages

The visualization is implemented using D3.js area charts, with careful attention to Du Bois' original color palette and styling choices. The code handles data parsing, scaling, and rendering to create a faithful reproduction of the original work.

## Project Structure

```
├── data.csv          # Historical data on slave/free percentages
├── index.html        # Main HTML document with visualization container
├── main.js           # D3.js visualization code
├── style.css         # Custom styles and Tailwind CSS
├── package.json      # Project dependencies
└── README.md         # Project documentation
```

## Installation and Usage

To install and run this project locally:

```bash
# Clone the repository
git clone [repository-url]

# Navigate to the project directory
cd duboisviz

# Install dependencies
npm install

# Start the development server
npm run dev
```

To build for production:

```bash
npm run build
```

## Technologies Used

- [D3.js (v6)](https://d3js.org/) - Data visualization library
- [Vite.js](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework

## Historical Data

The visualization uses data showing the percentage of enslaved vs. free Black Americans from 1790 to 1870:

| Year | Slave (%) | Free (%) |
|------|-----------|----------|
| 1790 | 92        | 8        |
| 1800 | 88        | 11       |
| 1810 | 86.5      | 13.5     |
| 1820 | 87        | 13       |
| 1830 | 86        | 14       |
| 1840 | 87        | 13       |
| 1850 | 88        | 12       |
| 1860 | 89        | 11       |
| 1870 | 0         | 100      |

## Acknowledgements

This project was inspired by W.E.B. Du Bois' groundbreaking work and contributions to data visualization, sociology, and African American history. It is meant to honor his legacy and bring attention to his innovative approach to data representation.

Special thanks to:
- The [W.E.B. Du Bois Data Portraits](https://www.papress.com/html/product.details.dna?isbn=9781616897062) book editors
- [Anthony Starks](https://github.com/ajstarks) for his work in preserving Du Bois' data
- The Data Visualization Society for promoting awareness of Du Bois' contributions

## License

This project is licensed under the MIT License.

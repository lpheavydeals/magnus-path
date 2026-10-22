# Ads report template: columns, example rows and formulas

Source for `/downloads/ads-report-template.xlsx` and `/downloads/ads-report-template.csv`, linked from
`src/pages/resources/ads-report-template.astro`. The page explains the same columns, so keep the headers identical.

All numbers below are **example numbers** (an imaginary store, amounts in ₹). They are not benchmarks. Put a line at the
top of the xlsx (row 1, merged, italic): `Example numbers only. Replace the blue input cells with your own data. Amounts in your store currency.`
Format input cells with blue text and computed cells with black text (usual spreadsheet convention).

## Sheet 1: `Channels` (one row per channel per month)

Header row (exact text, in this order). Letters are the xlsx columns; "Input" columns are typed in, "Formula" columns are computed.

| Col | Header | Type | Formula (xlsx, row 3 shown) | Number format |
|---|---|---|---|---|
| A | Month | Input | – | text, e.g. `Sep 2026` |
| B | Channel | Input | – | text |
| C | Ad spend | Input | – | `#,##0` |
| D | Impressions | Input | – | `#,##0` |
| E | Clicks | Input | – | `#,##0` |
| F | Orders | Input | – | `#,##0` |
| G | Revenue | Input | – | `#,##0` |
| H | New customers | Input | – | `#,##0` |
| I | Gross margin % | Input | – | `0%` (stored as 0.45 = 45%) |
| J | Returning-customer orders | Formula | `=F3-H3` | `#,##0` |
| K | CTR | Formula | `=IFERROR(E3/D3,"")` | `0.00%` |
| L | CPC | Formula | `=IFERROR(C3/E3,"")` | `#,##0.00` |
| M | Conversion rate | Formula | `=IFERROR(F3/E3,"")` | `0.00%` |
| N | AOV | Formula | `=IFERROR(G3/F3,"")` | `#,##0` |
| O | ROAS | Formula | `=IFERROR(G3/C3,"")` | `0.00"x"` |
| P | ACoS | Formula | `=IFERROR(C3/G3,"")` | `0.0%` |
| Q | Cost per order | Formula | `=IFERROR(C3/F3,"")` | `#,##0` |
| R | CAC | Formula | `=IFERROR(C3/H3,"")` | `#,##0` |
| S | New-customer share | Formula | `=IFERROR(H3/F3,"")` | `0.0%` |
| T | Gross profit | Formula | `=G3*I3` | `#,##0` |
| U | Profit after ads | Formula | `=T3-C3` | `#,##0` (red when negative) |
| V | Break-even ROAS | Formula | `=IFERROR(1/I3,"")` | `0.00"x"` |
| W | Notes | Input | – | text |

Formulas in words (same as on the page):
- Returning-customer orders = Orders − New customers (each new customer places exactly one first order)
- CTR = Clicks ÷ Impressions
- CPC = Ad spend ÷ Clicks
- Conversion rate = Orders ÷ Clicks
- AOV = Revenue ÷ Orders
- ROAS = Revenue ÷ Ad spend
- ACoS = Ad spend ÷ Revenue (shown as %; ACoS = 1 ÷ ROAS)
- Cost per order = Ad spend ÷ Orders
- CAC = Ad spend ÷ New customers
- New-customer share = New customers ÷ Orders
- Gross profit = Revenue × Gross margin %
- Profit after ads = Gross profit − Ad spend
- Break-even ROAS = 1 ÷ Gross margin %

Gross margin % = what is left of revenue after product cost, shipping, packaging, payment fees and marketplace fees,
before ad spend (also called contribution margin before ads). Amazon example uses a lower margin because of marketplace fees.

### Layout (row 1 = example note, row 2 = headers)

Example rows (inputs A–I; computed values shown so the file can be checked; W = Notes):

| Row | Month | Channel | Ad spend | Impressions | Clicks | Orders | Revenue | New customers | Gross margin % | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| 3 | Sep 2026 | Meta ads | 60000 | 900000 | 12000 | 150 | 210000 | 110 | 45% | Prospecting + retargeting |
| 4 | Sep 2026 | Google ads | 40000 | 300000 | 8000 | 120 | 180000 | 70 | 45% | Search, Shopping, PMax |
| 5 | Sep 2026 | Amazon ads | 30000 | 400000 | 6000 | 140 | 140000 | 90 | 30% | Sponsored Products + Brands; new customers = new-to-brand orders |
| 6 | Sep 2026 | Total | `=SUM(C3:C5)` | `=SUM(D3:D5)` | `=SUM(E3:E5)` | `=SUM(F3:F5)` | `=SUM(G3:G5)` | `=SUM(H3:H5)` | `=IFERROR(T6/G6,"")` | Month total |
| 7 | (blank) | | | | | | | | | |
| 8 | Oct 2026 | Meta ads | 80000 | 1150000 | 15500 | 210 | 305000 | 150 | 45% | Festive creatives from 1 Oct |
| 9 | Oct 2026 | Google ads | 45000 | 320000 | 8600 | 140 | 215000 | 75 | 45% | |
| 10 | Oct 2026 | Amazon ads | 35000 | 450000 | 6800 | 165 | 170000 | 100 | 30% | |
| 11 | Oct 2026 | Total | `=SUM(C8:C10)` | `=SUM(D8:D10)` | `=SUM(E8:E10)` | `=SUM(F8:F10)` | `=SUM(G8:G10)` | `=SUM(H8:H10)` | `=IFERROR(T11/G11,"")` | Month total |

Total rows (6 and 11): bold. Columns J–S and U–V use the **same row formulas** as the channel rows (so ratios are
recomputed from the summed totals, never averaged). Column T on total rows is a sum, not revenue × margin:
`T6 = SUM(T3:T5)`, `T11 = SUM(T8:T10)`. Column I on total rows is the weighted margin `=IFERROR(T6/G6,"")` (shown above),
so Break-even ROAS on a total row = Revenue ÷ Gross profit.

Expected computed values (for checking the file; rounded):

| Row | Ret. orders | CTR | CPC | Conv. rate | AOV | ROAS | ACoS | Cost/order | CAC | New share | Gross profit | Profit after ads | Break-even ROAS |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Sep Meta | 40 | 1.33% | 5.00 | 1.25% | 1,400 | 3.50x | 28.6% | 400 | 545 | 73.3% | 94,500 | 34,500 | 2.22x |
| Sep Google | 50 | 2.67% | 5.00 | 1.50% | 1,500 | 4.50x | 22.2% | 333 | 571 | 58.3% | 81,000 | 41,000 | 2.22x |
| Sep Amazon | 50 | 1.50% | 5.00 | 2.33% | 1,000 | 4.67x | 21.4% | 214 | 333 | 64.3% | 42,000 | 12,000 | 3.33x |
| Sep Total | 140 | 1.63% | 5.00 | 1.58% | 1,293 | 4.08x | 24.5% | 317 | 481 | 65.9% | 2,17,500 | 87,500 | 2.44x (margin 41.0%) |
| Oct Meta | 60 | 1.35% | 5.16 | 1.35% | 1,452 | 3.81x | 26.2% | 381 | 533 | 71.4% | 1,37,250 | 57,250 | 2.22x |
| Oct Google | 65 | 2.69% | 5.23 | 1.63% | 1,536 | 4.78x | 20.9% | 321 | 600 | 53.6% | 96,750 | 51,750 | 2.22x |
| Oct Amazon | 65 | 1.51% | 5.15 | 2.43% | 1,030 | 4.86x | 20.6% | 212 | 350 | 60.6% | 51,000 | 16,000 | 3.33x |
| Oct Total | 190 | 1.61% | 5.18 | 1.67% | 1,340 | 4.31x | 23.2% | 311 | 492 | 63.1% | 2,85,000 | 1,25,000 | 2.42x (margin 41.3%) |

## Sheet 2: `Summary` (one row per month, whole store)

Platform-reported revenue overlaps between channels (one order can be claimed by Meta and Google), so this sheet
compares total ad spend with the revenue your store actually recorded.

| Col | Header | Type | Formula (row 3 shown) | Number format |
|---|---|---|---|---|
| A | Month | Input | – | text |
| B | Total ad spend | Formula | `=Channels!C6` (Sep), `=Channels!C11` (Oct) | `#,##0` |
| C | Ad-reported revenue | Formula | `=Channels!G6` (Sep), `=Channels!G11` (Oct) | `#,##0` |
| D | Store revenue | Input | – (from Shopify / WooCommerce / your store reports) | `#,##0` |
| E | Store orders | Input | – | `#,##0` |
| F | Store new customers | Input | – | `#,##0` |
| G | MER (blended ROAS) | Formula | `=IFERROR(D3/B3,"")` | `0.00"x"` |
| H | Blended CAC | Formula | `=IFERROR(B3/F3,"")` | `#,##0` |
| I | Ad spend % of revenue | Formula | `=IFERROR(B3/D3,"")` | `0.0%` |
| J | Store AOV | Formula | `=IFERROR(D3/E3,"")` | `#,##0` |
| K | Notes | Input | – | text |

Formulas in words: MER = Store revenue ÷ Total ad spend; Blended CAC = Total ad spend ÷ Store new customers;
Ad spend % of revenue = Total ad spend ÷ Store revenue; Store AOV = Store revenue ÷ Store orders.

Example rows (row 1 = same example note, row 2 = headers):

| Row | Month | Total ad spend | Ad-reported revenue | Store revenue | Store orders | Store new customers | Notes |
|---|---|---|---|---|---|---|---|
| 3 | Sep 2026 | 130000 (formula) | 530000 (formula) | 720000 | 520 | 300 | Includes organic, email and direct sales |
| 4 | Oct 2026 | 160000 (formula) | 690000 (formula) | 910000 | 640 | 370 | Festive month |

Expected: Sep MER 5.54x, blended CAC 433, ad spend 18.1% of revenue, store AOV 1,385;
Oct MER 5.69x, blended CAC 432, ad spend 17.6% of revenue, store AOV 1,422.

## Sheet 3 (xlsx only): `How to use`

Plain text, one item per row:
1. Fill one row per channel per month, straight from each ad platform's report for the calendar month.
2. Revenue and orders are what the platform reports (its own attribution). Note the attribution window in Notes.
3. New customers: Meta and Google from your store or CRM where possible; Amazon "new-to-brand" orders.
4. Gross margin %: after product cost, shipping, packaging, payment and marketplace fees, before ads.
5. Fill the Summary sheet from your store's own reports; MER is the number to trust when channels overlap.
6. Compare each month with the one before, not with someone else's numbers.

## CSV (`/downloads/ads-report-template.csv`)

The `Channels` sheet only: header row + the 8 data rows (6 channel rows + 2 total rows, no blank row, no example-note row),
UTF-8 with BOM (so Excel reads it cleanly), standard quoting for any field with a comma. Computed columns hold the **values** (CSV has no formulas), rounded:
percentages as decimals with 4 places (0.0133), money with 2 places, ROAS with 2 places. Inputs as plain numbers (no
thousands separators, margin as 0.45). Header row exactly:

```
Month,Channel,Ad spend,Impressions,Clicks,Orders,Revenue,New customers,Gross margin %,Returning-customer orders,CTR,CPC,Conversion rate,AOV,ROAS,ACoS,Cost per order,CAC,New-customer share,Gross profit,Profit after ads,Break-even ROAS,Notes
```

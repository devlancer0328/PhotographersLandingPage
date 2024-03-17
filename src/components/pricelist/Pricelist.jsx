import { PricelistContainer } from "./PricelistStyle";
import { useMemo } from "react";
import { MantineReactTable, useMantineReactTable } from "mantine-react-table";

const data = [
  {
    format: "20x25",
    photo: "18,00 PLN",
    poster: "9,00 PLN",
    canvas: "65,00 PLN",
  },
  {
    format: "21x30",
    photo: "14,00 PLN",
    poster: "11,00 PLN",
    canvas: "75,00 PLN",
  },
  {
    format: "25x30",
    photo: "18,00 PLN",
    poster: "13,00 PLN",
    canvas: "75,00 PLN",
  },
  {
    format: "25x38",
    photo: "20,00 PLN",
    poster: "13,00 PLN",
    canvas: "85,00 PLN",
  },
  {
    format: "30x40",
    photo: "27,00 PLN",
    poster: "15,00 PLN",
    canvas: "105,00 PLN",
  },
  {
    format: "30x45",
    photo: "38,00 PLN",
    poster: "20,00 PLN",
    canvas: "125,00 PLN",
  },
  {
    format: "40x50",
    photo: "40,00 PLN",
    poster: "25,00 PLN",
    canvas: "135,00 PLN",
  },
];

const Pricelist = () => {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "format", //access nested data with dot notation
        header: "Format (w cm)",
      },
      {
        accessorKey: "photo",
        header: "Foto (240g)",
      },
      {
        accessorKey: "poster", //normal accessorKey
        header: "Plakat (120g)",
      },
      {
        accessorKey: "canvas",
        header: "Płótno",
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data, //must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
  });

  return (
    <div id="pricelist">
      <PricelistContainer>
        <h1>Cennik</h1>
        <MantineReactTable table={table} />
      </PricelistContainer>
    </div>
  );
};

export default Pricelist;

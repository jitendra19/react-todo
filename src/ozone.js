import React from "react";
// import { ArrayField, Datagrid, DateField, UrlField } from "react-admin";
const data = {
  id: 123,
  tags: [{ name: "foo" }, { name: "bar" }],
  backlinks: [
    {
      uuid: "34fdf393-f449-4b04-a423-38ad02ae159e",
      date: "2012-08-10T00:00:00.000Z",
      url: "http://example.com/foo/bar.html"
    },
    {
      uuid: "d907743a-253d-4ec1-8329-404d4c5e6cf1",
      date: "2012-08-14T00:00:00.000Z",
      url: "https://blog.johndoe.com/2012/08/12/foobar.html"
    }
  ]
};
export default (props) => {
  return (
    <div>jitendr</div>
    // <ArrayField source="backlinks">
    //   <Datagrid>
    //     <DateField source="date" />
    //     <UrlField source="url" />
    //   </Datagrid>
    // </ArrayField>
  );
  // return <div>jtiendra</div>;
};

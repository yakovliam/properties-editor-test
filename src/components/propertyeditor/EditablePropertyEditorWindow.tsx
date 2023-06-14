import {
  Box,
  Input,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

import translationData from "../../assets/th.json";
import Property from "../../types/property";
import parseJsonIntoProperties from "../../parser/property-parser";
import { useState } from "react";

const TranslationRow = ({ rowKey, rowValue }: any) => {
  const [value, setValue] = useState(rowValue);

  const hasChangedFromOriginal = () => {
    return value !== rowValue;
  };

  const isInvalid = () => {
    return value === "";
  };

  return (
    <Tr>
      <Td>
        <Input size={"xs"} disabled value={rowKey} />
      </Td>
      <Td>
        <Input
          isInvalid={value === ""}
          borderColor={hasChangedFromOriginal() ? "green.300" : "gray.300"}
          errorBorderColor="red.300"
          size={"xs"}
          bgColor={
            isInvalid()
              ? "red.100"
              : hasChangedFromOriginal()
              ? "green.50"
              : "white"
          }
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </Td>
    </Tr>
  );
};

const EditablePropertyEditorWindow = () => {
  // parse assets/en.json into a list of key-value pairs

  /**
   * {  "common.about": "About", ... }
   * into
   * [
   *  { key: "common.about", value: "About" },
   * ]
   */

  const mapped: Property[] = parseJsonIntoProperties(translationData);
  return (
    <Box w={"100%"} h={"100%"} overflowY={"scroll"}>
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Key</Th>
              <Th>Translation</Th>
            </Tr>
          </Thead>
          <Tbody>
            {mapped.map((data) => (
              <TranslationRow
                key={data.key}
                rowKey={data.key}
                rowValue={data.value}
              />
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Key</Th>
              <Th>Translation</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default EditablePropertyEditorWindow;

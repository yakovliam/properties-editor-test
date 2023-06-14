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

import translationData from "../../assets/en.json";
import Property from "../../types/property";
import parseJsonIntoProperties from "../../parser/property-parser";

const TranslationRow = ({ rowKey, rowValue }: any) => {
  return (
    <Tr>
      <Td>
        <Input size={"xs"} disabled value={rowKey} />
      </Td>
      <Td>
        <Input size={"xs"} disabled value={rowValue} />
      </Td>
    </Tr>
  );
};

const StaticPropertyEditorWindow = () => {
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

export default StaticPropertyEditorWindow;

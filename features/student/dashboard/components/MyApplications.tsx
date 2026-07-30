import Card from "@/components/shared/Card/Card";
import CardHeader from "@/components/shared/CardHeader/CardHeader";
import Button from "@/components/ui/Button/Button";
import { LuListFilter } from "react-icons/lu";
import { Table } from "@/components/shared/Table/Table";
import { cn } from "@/lib/cn";
import LineProgress from "@/components/shared/LineProgress/LineProgress";
import { BiDotsVertical } from "react-icons/bi";

interface ApplicationProps {
  status?: "Draft" | "In Review" | "Submitted" | "Incomplete";
}

const MyApplications = ({ status = "In Review" }: ApplicationProps) => {
  return (
    <Card as="section" className="mt-4 w-full">
      <CardHeader headerTitle="My Applications">
        <Button
          variants="custom"
          className="border border-[#c5c7cf] rounded p-1"
        >
          <LuListFilter className="text-2xl text-secondary" />
        </Button>
      </CardHeader>
      <div className="min-w-75 overflow-x-auto">
        <Table className="w-full table-auto min-w-200 scrollbar-thumb-sky-600 scrollbar-track-sky-100 scrollbar-thin">
          <Table.Thead className="bg-[#fafcff] w-full">
            <Table.Tr className="border-b border-[#c5c7cf]">
              <Table.Th className="text-gray-500 text-sm tracking-wider p-4 text-left">
                Scholarship
              </Table.Th>
              <Table.Th className="text-gray-500 text-sm tracking-wider p-4 text-left">
                Status
              </Table.Th>
              <Table.Th className="text-gray-500 text-sm tracking-wider p-4 text-left">
                Progress
              </Table.Th>
              <Table.Th className="text-gray-500 text-sm tracking-wider p-4 text-left">
                Next Deadline
              </Table.Th>
              <th className="p-4"></th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>
            <Table.Tr className="border-b border-[#c5c7cf]">
              <Table.Td className="p-4 text-left">MEXT Japanese GOV</Table.Td>
              <Table.Td className="p-4 text-left">
                <div
                  className={cn(
                    "p-2 rounded-2xl text-start w-12",
                    status === "Draft" && "bg-[#e3fff1] text-[#017154]",
                    status === "In Review" && "bg-[#e8eaef] text-[#012a5c]",
                    status === "Submitted" && "bg-[#eff4fe] text-[#0048a3]",
                    status === "Incomplete" && "bg-[#fedbd6] text-[#99010b]",
                  )}
                >
                  <span className="text-sm tracking-wide">45%</span>
                </div>
              </Table.Td>
              <Table.Td className="p-4 text-left">
                <div className="flex items-center gap-2">
                  <LineProgress
                    percentage={45}
                    className={cn(
                      status === "Draft" && "bg-[#006c49]",
                      status === "In Review" && "bg-[#002045]",
                      status === "Submitted" && "bg-[#014983]",
                      status === "Incomplete" && "bg-[#bb1b1a]",
                    )}
                  />
                  <span className="text-gray-600 text-sm tracking-wide">
                    45%
                  </span>
                </div>
              </Table.Td>
              <Table.Td className="p-4 text-left">Oct 12, 2023</Table.Td>
              <Table.Td className="p-4">
                <Button aria-label="Action Button" variants="custom">
                  <BiDotsVertical className="text-2xl" />
                </Button>
              </Table.Td>
            </Table.Tr>
          </Table.Tbody>
        </Table>
      </div>
    </Card>
  );
};

export default MyApplications;

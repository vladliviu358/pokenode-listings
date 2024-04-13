import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export function MovesTable({ moves }: { moves: [any] }) {
  return (
    <Table className="p-4">
      <TableHeader>
        <TableRow>
          <TableCell colSpan={3}>Total Moves</TableCell>
          <TableCell className="text-right text-2xl">{moves.length}</TableCell>
        </TableRow>
        <TableRow>
          <TableHead>Move</TableHead>
          <TableHead>Details</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {moves.map((move) => (
          <TableRow key={move.url}>
            <TableCell>{move.move.name}</TableCell>
            <TableCell>{move.version_group_details[0].level_learned_at}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

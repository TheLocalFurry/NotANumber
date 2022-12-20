import { Visualizer, Content } from "~/components/Visualizer";
import { FileDatabase, FileDatabaseWrapper } from "../FileDatabase";

export const FileDatabaseExample = ({ records }) => {
  return (
    <Visualizer>
      <FileDatabaseWrapper as={Content} padding="lg" noOverflow>
        <FileDatabase records={records} />
      </FileDatabaseWrapper>
    </Visualizer>
  );
};

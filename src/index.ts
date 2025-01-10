import DxfLoader from "./loader";
import { DxfBaseReader } from "./reader";

class DfxImporter implements WorkspaceImporter {
    async import(workspace: Workspace, model: unknown, progress: WorkerProgress): Promise<void> {
        const buffer = await workspace.root.get();
        const reader = new DxfBaseReader(buffer, model as Drawing, progress);
        const loader = new DxfLoader();
        await loader.readDxfFile(reader);
    }
}

export default {
    dxf: () => {
        return new DfxImporter();
    }
}
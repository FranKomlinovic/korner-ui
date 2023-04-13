import {StorageManager} from "@aws-amplify/ui-react-storage";
import {Dialog, DialogTitle} from "@mui/material";

const UploadComponent = ({uploadSuccessFunction, text, open, handleClose}) => {

    const Body = () => (
        <StorageManager
            maxFileCount={1}
            processFile={({file, key}) => {
                const fileParts = key.split('.');
                const ext = fileParts.pop();
                return {
                    file,
                    // This will prepend a unix timestamp
                    // to ensure all files uploaded are unique
                    key: `${Date.now()}${fileParts.join('.')}.${ext}`,
                };
            }}
            maxFileSize={1000000}
            displayText={{
                // some text are plain strings
                dropFilesText: text,
                browseFilesText: 'Učitaj fotografiju',
                // others are functions that take an argument
                getFilesUploadedText(count) {
                    return `Fotografija učitana`;
                },
            }}
            onUploadSuccess={uploadSuccessFunction}
            acceptedFileTypes={['image/*']}
            accessLevel="public"

        />
    )

    return (
        <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Učitaj fotografiju</DialogTitle>
            <Body/>
        </Dialog>)
}

export default UploadComponent;

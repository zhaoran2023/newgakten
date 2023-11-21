import Alert from 'react-bootstrap/Alert';

function BasicControl({msg}:{msg : String}) {
    if(msg !=""){
        return (
            <>
                <Alert key={'warning'} variant={'warning'}>
                    {msg}
                </Alert>
            </>
            );
    } 
}

export default BasicControl;
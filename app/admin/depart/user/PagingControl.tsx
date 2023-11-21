import Pagination from 'react-bootstrap/Pagination';
import Stack from 'react-bootstrap/Stack';

function PagingControl() {
  return (
        <Stack direction="horizontal" gap={3}>
              <div className="p-2 ms-auto">
                <Pagination>
                  <Pagination.Prev disabled/>
                  <Pagination.Item active>{1}</Pagination.Item>
                  <Pagination.Item>{2}</Pagination.Item>
                  <Pagination.Item>{3}</Pagination.Item>
                  <Pagination.Item>{4}</Pagination.Item>
                  <Pagination.Item>{5}</Pagination.Item>
                  <Pagination.Next />
                </Pagination>
              </div>
        </Stack>
  );
}

export default PagingControl;
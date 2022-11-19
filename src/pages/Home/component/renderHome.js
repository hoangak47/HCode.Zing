import HandleLike from '~/component/HandleLike';

function DataPageOne({ dataRender, navigate, context }) {
    return (
        <>
            {dataRender.length > 0 &&
                dataRender.map((item, index) => {
                    return (
                        <div key={index}>
                            
                        </div>
                    );
                })}
        </>
    );
}

export default DataPageOne;

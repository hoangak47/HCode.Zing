import axios from 'axios';
import { useContext, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from '~/component/LoadingListMV/loading';
import Context from '~/context/context';
import { URL } from '~/url';
import Content from './component/content';
import Control from './component/control';
import Tab from './component/tab';

import './mv.scss';

function MV() {
    const [activeTab, setActiveTab] = useState(
        window.location.pathname.split('/')[3] === 'IWZ9Z08I'
            ? 0
            : window.location.pathname.split('/')[3] === 'IWZ9Z08O'
            ? 1
            : window.location.pathname.split('/')[3] === 'IWZ9Z08W'
            ? 2
            : 3,
    );

    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const navigation = useNavigate();
    const context = useContext(Context);

    const tabItem = useRef();
    const lineTab = useRef();

    useEffect(() => {
        lineTab.current.style.left = tabItem.current.offsetLeft + 'px';
        lineTab.current.style.width = tabItem.current.offsetWidth + 'px';
    }, [tabItem, lineTab, activeTab]);

    const [code, setCode] = useState(window.location.pathname.split('/')[3]);

    const [dataMV, setDataMV] = useState([]);

    const [indexPage, setIndexPage] = useState(1);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setDataMV([]);
        axios
            .get(`${URL}listMV/${code}/${indexPage}/30`)
            .then(({ data }) => {
                setDataMV(data.data.items);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [code, indexPage]);

    useEffect(() => {
        context.setInputSearch('');
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const audio = document.querySelector('audio');

    return (
        <div className="MV">
            <Tab
                activeTab={activeTab}
                tabItem={tabItem}
                lineTab={lineTab}
                setActiveTab={setActiveTab}
                setCode={setCode}
                setIndexPage={setIndexPage}
                navigation={navigation}
            />

            {dataMV.length > 0 ? <Content dataMV={dataMV} context={context} audio={audio} /> : <Loading />}

            <Control indexPage={indexPage} setIndexPage={setIndexPage} />
        </div>
    );
}

export default MV;

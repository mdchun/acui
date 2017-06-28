import './Loadmore.scss';

const LOADING = 'loading';
const NOMORE = 'noMore';
const classnames = require('classnames');
import React from 'react';
class LoadMore extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            load: LOADING
        }
    }

    componentDidMount() {
        const t = this;
        if(this.props.scrollElement){
            // 其他定位元素滚动监听
            $(this.props.scrollElement)[0].addEventListener('scroll', this._onScroll.bind(t), false);
            $(this.props.scrollElement)[0].addEventListener('resize', this._onScroll.bind(t), false);
        }
        document.addEventListener('scroll', this._onScroll.bind(t), false);
        document.addEventListener('resize', this._onScroll.bind(t), false);

    }

    componentWillUnmount() {
        const t = this;
        if(this.props.scrollElement){
            $(this.props.scrollElement)[0].removeEventListener('scroll', this._onScroll.bind(t), false);
            $(this.props.scrollElement)[0].removeEventListener('resize', this._onScroll.bind(t), false);          
        }
        document.removeEventListener('scroll', this._onScroll.bind(t), false);
        document.removeEventListener('resize', this._onScroll.bind(t), false);

    }

    loaded() {
        this.setState({load: LOADING});
        this.isLoading = false;
        this._unLock();
        // 如果 loaded 之后，也应该检测下是否 inViewPort 如果是的话，应该再触发一次加载。
        this._onScroll();
    }

    // lock
    loading() {
        this.isLoading = true;
    }

    _canLoad() {
        return !this.isLoading && this.state.load !== NOMORE;
    }

    noMore() {
        this.setState({load: NOMORE});
        this._unLock();
    }

    render() {
        const t = this;

        let text = '';

        switch (t.state.load) {
            case LOADING:
                text = t.props.loadingText;
                break;
            case NOMORE:
                text = t.props.noMoreText;
        }
        return (<div ref="root" className={classnames({
            'tLoadMore': true,
            [t.props.className]: !!t.props.className,
            [t.state.load]: !!t.state.load
        })}>{text}</div>);
    }

    _isVisible(el, offset) {
        const t = this;
        offset = t.props.offset >= 50 ? t.props.offset : 50;
        // Check if the element is visible
        // https://github.com/jquery/jquery/blob/740e190223d19a114d5373758127285d14d6b71e/src/css/hiddenVisibleSelectors.js
        if (!el.offsetWidth || !el.offsetHeight) {
            return false;
        }

        const eltRect = el.getBoundingClientRect();

        return eltRect.top < document.documentElement.clientHeight + offset;
    }

    _onScroll() {
        const t = this;
        const el = ReactDOM.findDOMNode(t.refs.root);

        if (!el || !t._canLoad()) {
            return;
        }
        if (t._isVisible(el, this.offset)) {
            t.loading();
            t._handleLoadEvents();
        }
    }

    _handleLoadEvents() {
        this.props.onLoadMore && this.props.onLoadMore({loadState: this.state.load})
    }

    _isLoading() {
        return this.isLoading;
    }

    _unLock() {
        this.isLoading = false;
    }
}

LoadMore.defaultProps = {
    offset: 50,
    onLoadMore: function(){},
    scrollElement: '',
    loadingText: '正在加载中…',
    noMoreText: '没有啦！'
};

// http://facebook.github.io/react/docs/reusable-components.html
LoadMore.propTypes = {
    offset: React.PropTypes.number,
    onLoadMore: React.PropTypes.func,
    scrollElement: React.PropTypes.string,
    loadingText: React.PropTypes.string,
    noMoreText: React.PropTypes.string
};

module.exports = LoadMore;
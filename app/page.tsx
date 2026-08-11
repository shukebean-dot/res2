const mapsUrl = "https://www.google.com/maps/place/%E9%A6%99%E6%BA%90%E5%B0%8F%E9%A3%9F%E9%A6%86+Restoran+Xian+Yuan/@2.3632761,102.0626403,26510m/data=!3m1!1e3!4m10!1m2!2m1!1z576O6aOf!3m6!1s0x31d1fcfc28cc26cd:0x4aea671cf1461750!8m2!3d2.3632761!4d102.2150756";

const dishes = [
  { no: "01", zh: "叁巴臭豆鲜虾", en: "Sambal Petai Prawns", note: "大颗鲜虾 · 香辣叁巴 · 爽脆臭豆" },
  { no: "02", zh: "招牌卤猪脚", en: "Braised Pork Knuckle", note: "软嫩入味 · 浓郁卤香 · 下饭首选" },
  { no: "03", zh: "湿炒粿条", en: "Kuey Teow Basah", note: "镬气十足 · 滑嫩酱香 · 现点现炒" },
  { no: "04", zh: "酸甜芋篮", en: "Sweet & Sour Yam Basket", note: "外酥内绵 · 酸甜开胃 · 合家分享" },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap" aria-label="主导航">
        <a className="brand" href="#top" aria-label="香源小食馆首页">
          <span className="brand-mark">香</span>
          <span><strong>香源小食馆</strong><small>RESTORAN XIAN YUAN</small></span>
        </a>
        <div className="nav-links">
          <a href="#dishes">招牌推荐</a><a href="#story">关于我们</a><a href="#visit">到店资讯</a>
        </div>
        <a className="nav-call" href="tel:+6065560689">电话订位 <span>↗</span></a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><span /> ALOR GAJAH · MELAKA</p>
          <h1>熟悉的家乡味，<br /><em>每一桌都热腾腾。</em></h1>
          <p className="lead">从镬气小炒到惹味海鲜，香源小食馆用实在份量与熟悉味道，陪伴每一次家人朋友的聚餐。</p>
          <div className="hero-actions">
            <a className="btn primary" href="tel:+6065560689">致电订位 <span>06-556 0689</span></a>
            <a className="btn ghost" href={mapsUrl} target="_blank" rel="noreferrer">Google Maps 导航 ↗</a>
          </div>
          <div className="hero-meta">
            <div><b>4.0</b><span>★★★★★</span><small>Google 评分 · 300+ 食客评价</small></div>
            <div><b>午 · 晚市</b><small>周一至周六营业</small></div>
          </div>
        </div>
        <div className="hero-visual">
          <img src="/restaurant-exterior.jpg" alt="香源小食馆门店外观" />
          <div className="photo-caption"><span>社区里的好味道</span><small>ALOR GAJAH, MELAKA</small></div>
          <div className="seal">香<br /><small>源</small></div>
        </div>
      </section>

      <section className="marquee" aria-hidden="true"><div>现点现炒 · 家常好味 · 份量实在 · 欢聚一桌 · WOK-FRIED FAVOURITES · </div></section>

      <section className="dishes wrap" id="dishes">
        <div className="section-head">
          <div><p className="eyebrow"><span /> HOUSE FAVOURITES</p><h2>来香源，<br />先点这几道。</h2></div>
          <p>精选食客经常提到的香源风味。菜色与供应以当天餐馆为准，欢迎来电询问。</p>
        </div>
        <div className="dish-grid">
          {dishes.map((dish) => (
            <article className="dish-card" key={dish.no}>
              <div className="dish-number">{dish.no}</div>
              <div className="dish-plate"><span>{dish.zh.charAt(0)}</span></div>
              <div className="dish-copy"><h3>{dish.zh}</h3><p>{dish.en}</p><small>{dish.note}</small></div>
            </article>
          ))}
        </div>
      </section>

      <section className="story" id="story">
        <div className="wrap story-grid">
          <div className="story-card"><span className="quote">“</span><p>好吃，不必复杂。<br />火候到，味道就到。</p><small>香源小食馆 · 日常的真滋味</small></div>
          <div className="story-copy">
            <p className="eyebrow light"><span /> OUR TABLE</p>
            <h2>一桌热菜，<br />就是最好的相聚。</h2>
            <p>我们相信，一顿好饭是刚起锅的镬气、足够分享的份量，还有一家人围桌聊天的声音。无论是简单午餐，还是朋友聚会，来到香源，就坐下来慢慢吃。</p>
            <div className="story-points"><span>现点现炒</span><span>适合聚餐</span><span>价格亲民</span></div>
          </div>
        </div>
      </section>

      <section className="visit wrap" id="visit">
        <div className="visit-title"><p className="eyebrow"><span /> PLAN YOUR VISIT</p><h2>今天，来吃饭吧。</h2></div>
        <div className="visit-grid">
          <div className="info-block"><small>营业时间</small><h3>周一至周六</h3><p>午市 12:00 — 2:00<br />晚市 5:00 — 9:30</p><em>周日休息 · 节假日时间请电话确认</em></div>
          <div className="info-block"><small>餐馆地址</small><h3>Taman Sungai Petai Permai</h3><p>SP6, 1, Jalan Sg Petai Permai,<br />78000 Alor Gajah, Melaka</p><a href={mapsUrl} target="_blank" rel="noreferrer">打开 Google Maps ↗</a></div>
          <div className="info-block highlight"><small>订位 / 询问</small><h3>06-556 0689</h3><p>高峰时段建议提前来电，<br />我们会尽力为您留座。</p><a href="tel:+6065560689">立即致电 ↗</a></div>
        </div>
      </section>

      <footer>
        <div className="wrap footer-inner">
          <div className="brand footer-brand"><span className="brand-mark">香</span><span><strong>香源小食馆</strong><small>RESTORAN XIAN YUAN</small></span></div>
          <p>家常好味 · 欢聚一桌</p><p>Alor Gajah, Melaka</p>
        </div>
      </footer>
      <div className="mobile-bar"><a href="tel:+6065560689">电话订位</a><a href={mapsUrl} target="_blank" rel="noreferrer">地图导航</a></div>
    </main>
  );
}

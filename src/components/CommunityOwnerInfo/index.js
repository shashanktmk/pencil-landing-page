import "./index.css";
export function CommunityOwnerInfo() {
  return (
    <div className="community-owner-section">
      <h3>Community Owner</h3>
      <div class="person-card">
        <img
          class="person-img"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bill_Gates_2017_%28cropped%29.jpg/439px-Bill_Gates_2017_%28cropped%29.jpg"
          alt="Bill Gates"
        />
        <div class="person-info">
          <div class="details-title">
            <span>Bill Gates</span>
            <br />
            <small>Chief Executive Officer, Co-Founder</small>
          </div>
          <div class="details-body">
            William Henry "Bill" Gates III is an American business magnate,
            philanthropist, investor, computer programmer, and inventor. In
            1975, Gates co-founded Microsoft, that became the world's largest PC
            software company, with Paul Allen.
          </div>
        </div>
      </div>
    </div>
  );
}

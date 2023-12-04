import "./View/App.css";
import Navbar from "./View/Navbar";
import "./View/home.css";
import "./View/flow.css";

function NuikitType() {
  return (
    <div className="contain" style={{ display: "flex", flexDirection: "row" }}>
      <Navbar />
      <div className="flow-contain full-height">
        {/* toggle */}
        <div className="con-toggle">
          <input type="checkbox" id="check" />
          <label for="check" className="button flex btw">
            <p className="txt-toggle normal-plan">Normal Plan</p>
            <p className="txt-toggle coop-plan">Cooperative Plan</p>
          </label>
        </div>
        {/*  */}
        <div className="h">
          <div className="type-con full-height">
            <p>Nuikit View | Normal Plan</p>

            {/* Filter */}
            <div className="flex op-contain">
              <div className="course-option">
                <select className="">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                </select>
              </div>
              <div className="cat-option">
                <select className="">
                  <option>option 1</option>
                  <option>option 2</option>
                  <option>option 3</option>
                </select>
              </div>
            </div>

            <div className="flex btw">
              <p>Your Nuikit</p>
              <p>21/139</p>
            </div>

            {/* General and Elective */}
            <div className="flex btw h2">
              {/* General */}
              <div className="frame">
                <div className="flex btw">
                  <p>General</p>
                  <p>10/30</p>
                </div>
                <div className="node-frame h2">
                  <div className="flex btw">
                    <p>Require Course</p>
                    <p>10/17</p>
                  </div>
                  <div>Node Space</div>
                  <div className="flex btw">
                    <p>Elective</p>
                    <p>0/13</p>
                  </div>
                  <div>Node Space</div>
                </div>
              </div>

              {/* Free Elective */}
              <div className="frame ">
                <div className="flex btw">
                  <p>Free Elective</p>
                  <p>0/7</p>
                </div>
                <div className="node-frame h2"></div>
              </div>
            </div>
          </div>
        </div>

        {/*  */}
        <div className="h">
          <div className="type-con full-height">
            {/* Specification */}
            <div className="h2">
              <div className="flex btw">
                <p>Specification</p>
                <p>10/30</p>
              </div>

              <div className="node-frame h2">
                <div className="flex btw">
                  <p>Core Course</p>
                  <p>10/17</p>
                </div>
                <div>Node Space</div>
                <div>Major Course</div>
                <div className="flex btw">
                  <p>Major Require Course</p>
                  <p>0/13</p>
                </div>
                <div>Node Space</div>
                <div className="flex btw">
                  <p>Major Elective</p>
                  <p>0/13</p>
                </div>
                <div>Node Space</div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default NuikitType;

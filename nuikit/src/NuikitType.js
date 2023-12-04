import "./View/App.css";
import Navbar from "./View/Navbar";
import "./View/home.css";
import "./View/flow.css";

function NuikitType() {
  return (
    <div className="contain" style={{ display: "flex", flexDirection: "row" }}>
      <Navbar />
      <div className="flow-contain full-height">
        <div className="con-toggle">
          <input type="checkbox" id="check" />
          <label for="check" className="button flex btw">
            <p className="txt-toggle normal-plan">Normal Plan</p>
            <p className="txt-toggle coop-plan">Cooperative Plan</p>
          </label>
        </div>
        <div className="h">
          <div className="type-con full-height">
            <p>Nuikit View</p>
            {/* General and Elective */}
            <div className="flex btw h2">
              {/* General */}
              <div className="frame">
                <div className="flex btw">
                  <p>General</p>
                  <p>10/30</p>
                </div>
                {/* frame */}
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

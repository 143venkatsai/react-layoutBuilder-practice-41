// Write your code here

import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeLeftNavbar = () => {
        onToggleShowLeftNavbar()
      }

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeRightNavbar = () => {
        onToggleShowRightNavbar()
      }

      return (
        <div className="controller-container">
          <h1 className="controller-heading">Layout</h1>
          <ul className="controller-list">
            <li className="controller-item">
              <input
                type="checkbox"
                id="content"
                className="input-element"
                checked={showContent}
                onChange={onChangeContent}
              />
              <label htmlFor="content" className="label-element">
                Content
              </label>
            </li>
            <li className="controller-item">
              <input
                type="checkbox"
                id="leftNavbar"
                className="input-element"
                checked={showLeftNavbar}
                onChange={onChangeLeftNavbar}
              />
              <label htmlFor="leftNavbar" className="label-element">
                Left Navbar
              </label>
            </li>
            <li className="controller-item">
              <input
                type="checkbox"
                id="rightNavbar"
                className="input-element"
                checked={showRightNavbar}
                onChange={onChangeRightNavbar}
              />
              <label htmlFor="rightNavbar" className="label-element">
                Right Navbar
              </label>
            </li>
          </ul>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

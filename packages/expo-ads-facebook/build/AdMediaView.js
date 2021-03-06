import nullthrows from 'nullthrows';
import React from 'react';
import { requireNativeViewManager } from 'expo-core';
import { AdMediaViewContext } from './withNativeAd';
export default class AdMediaView extends React.Component {
    render() {
        return (<AdMediaViewContext.Consumer>
        {(contextValue) => {
            let context = nullthrows(contextValue);
            return <NativeAdMediaView {...this.props} ref={context.nativeRef}/>;
        }}
      </AdMediaViewContext.Consumer>);
    }
}
export const NativeAdMediaView = requireNativeViewManager('MediaView');
//# sourceMappingURL=AdMediaView.js.map
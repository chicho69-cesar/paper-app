import * as React from 'react';
import { Platform, StyleSheet } from 'react-native';

import type { StackNavigationProp } from '@react-navigation/stack';
import {
  Appbar,
  Banner,
  FAB,
  List,
  ToggleButton,
  Tooltip,
} from 'react-native-paper';

import ScreenWrapper from '../ScreenWrapper';

type Props = {
  navigation: StackNavigationProp<{}>;
};

const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';

const TooltipExample = ({ navigation }: Props): JSX.Element => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Appbar.Header elevated>
          <Tooltip title="Go back">
            <Appbar.Action 
              icon='chevron-left'
              size={32}
              onPress={() => navigation.goBack()} 
            />
          </Tooltip>

          <Appbar.Content title="Tooltips" />

          <Tooltip title="Print ⌘ + P">
            <Appbar.Action icon="printer" onPress={() => {}} />
          </Tooltip>

          <Tooltip title="Search">
            <Appbar.Action icon="magnify" onPress={() => {}} />
          </Tooltip>

          <Tooltip title="More options">
            <Appbar.Action icon={MORE_ICON} onPress={() => {}} />
          </Tooltip>
        </Appbar.Header>
      ),
    });
  });

  const renderFAB = (): JSX.Element => {
    return (
      <FAB size="medium" icon="plus" onPress={() => {}} style={styles.fab} />
    );
  };

  return (
    <>
      <ScreenWrapper>
        <Banner visible>
          A tooltip is displayed upon tapping and holding a screen element or
          component. Continuously display the tooltip as long as the user
          long-presses the element.
        </Banner>

        <List.Section title="Toggle Buttons">
          <ToggleButton.Row
            value="bold"
            style={styles.toggleButtonRow}
            onValueChange={() => {}}
          >
            <ToggleButton icon="format-bold" value="bold" />
            
            <Tooltip title="Align center">
              <ToggleButton icon="format-align-center" value="align-center" />
            </Tooltip>
          </ToggleButton.Row>
        </List.Section>
      </ScreenWrapper>
      <Tooltip title="Press Me">{renderFAB()}</Tooltip>
    </>
  );
};

TooltipExample.title = 'Tooltip';

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
  toggleButtonRow: {
    paddingHorizontal: 16,
  },
});

export default TooltipExample;
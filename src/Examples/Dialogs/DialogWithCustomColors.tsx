import * as React from 'react';
import {
  Button,
  Portal,
  Dialog,
  MD2Colors,
  useTheme,
  MD3Colors,
} from 'react-native-paper';

import { TextComponent } from './DialogTextComponent';

type DialogWCCProps = {
  visible: boolean;
  close:   () => void;
};

const DialogWithCustomColors = ({
  visible,
  close,
}: DialogWCCProps): JSX.Element => {
  const { isV3 } = useTheme();

  return (
    <Portal>
      <Dialog
        onDismiss={close}
        style={{
          backgroundColor: isV3 ? MD3Colors.primary10 : MD2Colors.purple900,
        }}
        visible={visible}
      >
        <Dialog.Title
          style={{ color: isV3 ? MD3Colors.primary95 : MD2Colors.white }}
        >
          Alert
        </Dialog.Title>
        
        <Dialog.Content>
          <TextComponent
            style={{ color: isV3 ? MD3Colors.primary95 : MD2Colors.white }}
          >
            This is a dialog with custom colors
          </TextComponent>
        </Dialog.Content>

        <Dialog.Actions>
          <Button
            color={isV3 ? MD3Colors.primary95 : MD2Colors.white}
            onPress={close}
          >
            Ok
          </Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default DialogWithCustomColors;

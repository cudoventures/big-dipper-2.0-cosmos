import React from 'react';
import Trans from 'next-translate/Trans';
import { Typography } from '@material-ui/core';
import { Name } from '@components';
import { MsgEditValidator } from '@models';
import { useProfileRecoil } from '@recoil/profiles';

const EditValidator = (props: {
  message: MsgEditValidator;
}) => {
  const { message } = props;

  const validator = useProfileRecoil(message.validatorAddress);
  const validatorMoniker = validator ? validator?.name : message
    .validatorAddress;

  return (
    <Typography>
      <Trans
        i18nKey="message_contents:txEditValidatorContent"
        components={[
          (
            <Name
              address={message.validatorAddress}
              name={validatorMoniker}
            />
          ),
        ]}
      />
    </Typography>
  );
};

export default EditValidator;

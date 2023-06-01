//import PropTypes from 'prop-types';

import { ButtonContainer, FeedbackButton } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options }) => (
  <ButtonContainer>
    {options.map(option => (
      <FeedbackButton key={option} type="button">
        {option}
      </FeedbackButton>
    ))}
  </ButtonContainer>
);

export default FeedbackOptions;

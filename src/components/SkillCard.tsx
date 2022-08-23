import React from 'react';

import {TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from 'react-native';

interface ButtonSkillCardsProps extends TouchableOpacityProps {
  skill: string;
}

export function SkillCard({skill, ...rest}: ButtonSkillCardsProps  ) {
  return (
    <TouchableOpacity 
      style={styles.buttonSkill}
      {...rest}
      >
      <Text style={styles.textSkills}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  buttonSkill: {
    backgroundColor: '#1F1E25',
    padding: 15,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 10,
  },

  textSkills: {
    color: '#FFF',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

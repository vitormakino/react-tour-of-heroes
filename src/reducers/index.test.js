import { heroes, selectedHero } from '../reducers';

it("Add Hero", () => {
  const beforeState = [{ id: 11, name: 'Mr. Nice' }];

  const afterState = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Teste' }];
  
  const action = { type: 'ADD_HERO',id: 12, name: 'Teste' };
  expect(heroes(beforeState, action)).toEqual(afterState);
});

it("Remove Hero", () => {
  const beforeState = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' }];

  const afterState = [
    { id: 11, name: 'Mr. Nice' },
    { id: 13, name: 'Bombasto' }];
  
  const action = { type: 'REMOVE_HERO',id: 12};
  expect(heroes(beforeState, action)).toEqual(afterState);
});

it("Edit Hero's name", () => {
  const beforeState = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Narco' },
    { id: 13, name: 'Bombasto' }];

  const afterState = [
    { id: 11, name: 'Mr. Nice' },
    { id: 12, name: 'Teste' },
    { id: 13, name: 'Bombasto' }];
  
  const action = { type: 'EDIT_HERO',id: 12, name: 'Teste' };
  expect(heroes(beforeState, action)).toEqual(afterState);
});

it("Select Hero", () => {
    const beforeState = 11;  
    const afterState = 13;

    const action = { type: 'TOGGLE_SELECT_HERO', id: 13 };
    expect(selectedHero(beforeState, action)).toEqual(afterState);
});
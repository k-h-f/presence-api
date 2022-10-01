class UpdateController {
  async postUpdateChannel(serverId: number, channelId: number) {
    return { message: `Channel Updated` };
  }
}

export default UpdateController;
